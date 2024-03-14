import React, {ReactNode} from "react";
import {RedirectIfLogin} from "@/shared/hocs/withRedirectIfAuth/RedirectIfLogin";

export const withRedirectIfLogin = (children: ReactNode, to: string) => {
    return (
        <RedirectIfLogin to={to}>
            {children}
        </RedirectIfLogin>
    )
}