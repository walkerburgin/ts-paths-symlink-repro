import React from "react";
import { Button } from "@blueprintjs/core";

export const FooApp: React.FC<{}> = () => {
    return (
        <div>
            <h1>foo-app</h1>
            <Button value="Hello, world" />
        </div>
    );
}