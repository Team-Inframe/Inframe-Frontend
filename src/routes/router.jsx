import { HotFramePage } from "@/pages/HotFramePage/page";

import { SaveHotFrame } from "@/pages/SaveHotFrame/page";
import { GalleryPage } from "@/pages/Storage/Gallery/page";
import RoutePath from "./routePath";
import { MainPage } from "@/pages/Main/page";
import SelectFrame from "@/pages/SelectFrame/page";
import { MyFramePage } from "@/pages/Storage/MyFrame/page";
import { StoragePage } from "@/pages/Storage/page";
import { SavedFramePage } from "@/pages/Storage/SavedFrame/page";
import MakeFrame from "@/pages/MakeBG/page";
import { createBrowserRouter } from "react-router-dom";
import CameraFrameApp from "@/pages/CameraFrame/page";

const routes = [
  {
    path: "/",
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: "/selectframe",
    children: [{ index: true, element: <SelectFrame /> }],
  },
  {
    path: "/hotframe",
    children: [{ index: true, element: <HotFramePage /> }],
  },
  {
    path: "/savehotframe",
    children: [{ index: true, element: <SaveHotFrame /> }],
  },
  {
    path: RoutePath.Storage,
    children: [
      { index: true, element: <StoragePage /> },
      { path: RoutePath.MyFrame, element: <MyFramePage /> },
      { path: RoutePath.SavedFrame, element: <SavedFramePage /> },
      { path: RoutePath.Gallery, element: <GalleryPage /> },
    ],
  },
  {
    path: "/selectframe/makeframe",
    children: [{ index: true, element: <MakeFrame /> }],
  },
  {
    path: "/cameraframe",
    children: [{ index: true, element: <CameraFrameApp /> }],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
