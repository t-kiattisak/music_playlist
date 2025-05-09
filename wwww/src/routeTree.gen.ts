/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as PlaylistPaylistIdImport } from './routes/playlist/$paylistId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PlaylistPaylistIdRoute = PlaylistPaylistIdImport.update({
  id: '/playlist/$paylistId',
  path: '/playlist/$paylistId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/playlist/$paylistId': {
      id: '/playlist/$paylistId'
      path: '/playlist/$paylistId'
      fullPath: '/playlist/$paylistId'
      preLoaderRoute: typeof PlaylistPaylistIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/playlist/$paylistId': typeof PlaylistPaylistIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/playlist/$paylistId': typeof PlaylistPaylistIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/playlist/$paylistId': typeof PlaylistPaylistIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/playlist/$paylistId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/playlist/$paylistId'
  id: '__root__' | '/' | '/playlist/$paylistId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PlaylistPaylistIdRoute: typeof PlaylistPaylistIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PlaylistPaylistIdRoute: PlaylistPaylistIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/playlist/$paylistId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/playlist/$paylistId": {
      "filePath": "playlist/$paylistId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
