import * as React from "react";
import { useComposedRefs } from "./use-composed-refs";

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, ref) => {
    if (!React.isValidElement(children)) {
      // If there's no valid child, there's nothing to render.
      // This can happen if the child is a string or null.
      return null;
    }

    // The type assertion is safe here because we've validated it's a React Element.
    const childProps = children.props as React.HTMLAttributes<HTMLElement>;
    const composedRef = useComposedRefs(ref, (children as any).ref);

    return React.cloneElement(children as React.ReactElement, {
      ...mergeProps(props, childProps),
      // The 'as any' is necessary here because TypeScript can't reconcile
      // the different ref types (e.g., RefCallback, RefObject).
      // This is a well-known and accepted pattern for this use case.
      ref: composedRef as any,
    });
  },
);

Slot.displayName = "Slot";

function mergeProps(
  slotProps: React.HTMLAttributes<HTMLElement>,
  childProps: React.HTMLAttributes<HTMLElement>,
): React.HTMLAttributes<HTMLElement> {
  const overrideProps = { ...childProps };

  for (const propName in childProps) {
    const slotPropValue = slotProps[propName as keyof typeof slotProps];
    const childPropValue = childProps[propName as keyof typeof childProps];

    const isHandler = /^on[A-Z]/.test(propName);
    if (
      isHandler &&
      typeof slotPropValue === "function" &&
      typeof childPropValue === "function"
    ) {
      (overrideProps as Record<string, unknown>)[propName] = (
        ...args: unknown[]
      ) => {
        childPropValue(...args);
        slotPropValue(...args);
      };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue]
        .filter(Boolean)
        .join(" ");
    }
  }

  return { ...slotProps, ...overrideProps };
}
