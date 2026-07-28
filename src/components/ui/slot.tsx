import * as React from "react";

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

/** In React 19 `ref` is an ordinary prop, so the child carries it in `props`. */
type SlottableElement = React.ReactElement<
  React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
>;

/**
 * Renders its props onto its single child instead of a wrapper element,
 * so callers can do `<SheetTrigger asChild><Button /></SheetTrigger>`.
 */
export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, ref) => {
    // If there's no valid child there's nothing to render — e.g. a bare string.
    if (!React.isValidElement(children)) {
      return null;
    }

    const child = children as SlottableElement;

    return React.cloneElement(child, {
      ...mergeProps(props, child.props),
      ref: composeRefs(ref, child.props.ref),
    });
  },
);

Slot.displayName = "Slot";

/** Plain function rather than a hook, so it stays callable after the early return. */
function composeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (node) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.RefObject<T | null>).current = node;
      }
    }
  };
}

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
