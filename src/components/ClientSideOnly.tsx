import { FunctionComponent, Suspense, SuspenseProps } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

export type ClientSideOnlyProps = {
  loadingFallback: SuspenseProps["fallback"];
};

const FallbackComponent: FunctionComponent<FallbackProps> = () => {
  return <h1>TODO</h1>;
};

export const ClientSideOnly: FunctionComponent<ClientSideOnlyProps> = ({
  loadingFallback,
  children,
}) => {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      {typeof window === "undefined" ? (
        loadingFallback
      ) : (
        <Suspense fallback={loadingFallback}>{children}</Suspense>
      )}
    </ErrorBoundary>
  );
};