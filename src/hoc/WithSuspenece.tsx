import React, {Component, ComponentType} from "react";
import {Preloader} from "../common/Pleloader";

export function WithSuspense<WCP> (WrappedComponent: React.ComponentType<WCP>)  {


    return (props: WCP) => {
        return <React.Suspense fallback={<Preloader/>}>
            <WrappedComponent {...props} />
        </React.Suspense>
    }

}