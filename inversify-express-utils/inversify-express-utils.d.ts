// Type definitions for inversify 1.0.0-alpha.4
// Project: https://github.com/inversify/inversify-express-utils
// Definitions by: inversify <https://github.com/inversify/>

/// <reference path="../inversify/inversify.d.ts" />

declare module "inversify-express-utils" {

    import * as express from "express";
    import * as inversify from "inversify";

    export namespace interfaces {

        export interface InversifyExpressServerConstructor {
            new(kernel: inversify.interfaces.Kernel): InversifyExpressServer;
        }

        export interface InversifyExpressServer {
            setConfig(fn: ConfigFunction): InversifyExpressServer;
            setErrorConfig(fn: ConfigFunction): InversifyExpressServer;
            build(): express.Application;
        }

        export interface ConfigFunction {
            (app: express.Application): void;
        }

        export interface HandlerDecoratorFactory {
            (path: string, ...middleware: express.RequestHandler[]): HandlerDecorator;
        }

        export interface HandlerDecorator {
            (target: any, key: string, value: any): void;
        }

    }

    export interface Controller {}

    export var InversifyExpressServer: interfaces.InversifyExpressServerConstructor;

    export var Controller: (path: string, ...middleware: express.RequestHandler[]) => (target: any) => void;

    export var All: interfaces.HandlerDecoratorFactory;
    export var Get: interfaces.HandlerDecoratorFactory;
    export var Post: interfaces.HandlerDecoratorFactory;
    export var Put: interfaces.HandlerDecoratorFactory;
    export var Patch: interfaces.HandlerDecoratorFactory;
    export var Head: interfaces.HandlerDecoratorFactory;
    export var Delete: interfaces.HandlerDecoratorFactory;
    export var Method: (method: string, path: string, ...middleware: express.RequestHandler[]) => interfaces.HandlerDecorator;

}
