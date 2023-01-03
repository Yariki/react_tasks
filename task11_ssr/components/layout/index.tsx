import React, {PropsWithChildren} from "react";
import { Header } from "../header";
import { ErrorBoundary } from "../utils/ErrorBoundary";
import { SelectedProvider } from "../context/SelectedContext";


export function Layout(props: PropsWithChildren ) {
    return (
        <>
            <ErrorBoundary>
                <SelectedProvider>
                    <Header />
                    {props.children}
                </SelectedProvider>
            </ErrorBoundary>
        </>
    );
}