// Type definitions for inversify 1.0.0-beta.6
// Project: https://github.com/inversify/inversify-logger-middleware
// Definitions by: inversify <https://github.com/inversify/>

/// <reference path="../inversify/inversify.d.ts"/>

declare namespace inversifyLoggerMiddleware {

    export namespace interfaces {

        export interface LoggerSettings {
            request?: RequestLoggerSettings;
            time?: boolean;
        }

        export interface RequestLoggerSettings {
            serviceIdentifier?: boolean;
            bindings?: BindingLoggerSettings;
            target?: TargetLoggerSettings;
        }

        export interface BindingLoggerSettings {
            activated?: boolean;
            serviceIdentifier?: boolean;
            implementationType?: boolean;
            factory?: boolean;
            provider?: boolean;
            constraint?: boolean;
            onActivation?: boolean;
            cache?: boolean;
            dynamicValue?: boolean;
            scope?: boolean;
            type?: boolean;
        }

        export interface TargetLoggerSettings {
            serviceIdentifier?: boolean;
            name?: boolean;
            metadata?: boolean;
        }

        export interface LogEntry {
            error: boolean;
            exception: any;
            multiInject: boolean;
            results: any[];
            rootRequest: inversify.interfaces.Request;
            serviceIdentifier: any;
            target: any;
            time: string;
        }

    }

    export function makeLoggerMiddleware(
        settings?: interfaces.LoggerSettings,
        renderer?: (out: interfaces.LogEntry) => void
    ): inversify.interfaces.Middleware;

    export function textSerializer(entry: interfaces.LogEntry): string;

}

declare module "inversify-logger-middleware" {
  export = inversifyLoggerMiddleware;
}
