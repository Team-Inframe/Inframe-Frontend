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
import UsersTestPage from "@/test/UsersTestPage";
import StickersTestPage from "@/test/StickersTestPage";
import FrameBackgroundCreateTestPage from "@/test/FrameBackgroundCreateTestPage";
import FrameCreateTestPage from "@/test/FrameCreateTestPage";
import FrameViewTestPage from "@/test/FrameViewTestPage";
import PhotoCreateTestPage from "@/test/PhotoCreateTestPage";
import PhotosListTestPage from "@/test/PhotoListTestPage";

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
    path: "/selectframe/makebg",
    children: [{ index: true, element: <MakeFrame /> }],
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
    path: RoutePath.UsersTest,
    children: [{ index: true, element: <UsersTestPage /> }],
  },
  {
    path: RoutePath.StickerTest,
    children: [{ index: true, element: <StickersTestPage /> }],
  },
  {
    path: RoutePath.FrameBackgroundCreateTest,
    children: [{ index: true, element: <FrameBackgroundCreateTestPage /> }],
  },
  {
    path: RoutePath.FrameCreateTest,
    children: [{ index: true, element: <FrameCreateTestPage /> }],
  },
  {
    path: RoutePath.FrameViewTest,
    children: [{ index: true, element: <FrameViewTestPage /> }],
  },
  {
    path: RoutePath.PhotoCreateTest,
    children: [{ index: true, element: <PhotoCreateTestPage /> }],
  },
  {
    path: RoutePath.PhotoListTest,
    children: [{ index: true, element: <PhotosListTestPage /> }],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
