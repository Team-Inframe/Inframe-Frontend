import { HotFramePage } from "@/pages/HotFramePage/page";
import { SaveHotFrame } from "@/pages/SaveHotFrame/page";
import { GalleryPage } from "@/pages/Storage/Gallery/page";
import RoutePath from "./routePath";
import { MainPage } from "@/pages/Main/page";
import SelectFrame from "@/pages/SelectFrame/page";
import { MyFramePage } from "@/pages/Storage/MyFrame/page";
import { StoragePage } from "@/pages/Storage/page";
import { SavedFramePage } from "@/pages/Storage/SavedFrame/page";
import MakeBG from "@/pages/MakeBG/page";
import { createBrowserRouter } from "react-router-dom";
import CameraFrameApp from "@/pages/CameraFrame/page";
import MakeSticker from "@/pages/MakeSticker/page";
import SaveFrame from "@/pages/SaveFrame/page";
import UsersTestPage from "@/test/UsersTestPage";
import StickersTestPage from "@/test/StickersTestPage";
import FrameBackgroundCreateTestPage from "@/test/FrameBackgroundCreateTestPage";
import FrameCreateTestPage from "@/test/FrameCreateTestPage";
import FrameViewTestPage from "@/test/FrameViewTestPage";
import PhotoCreateTestPage from "@/test/PhotoCreateTestPage";
import PhotosListTestPage from "@/test/PhotoListTestPage";
import CustomFrameCreateTestPage from "@/test/CustomFrameCreateTestPage";
import CustomFrameReadTestPage from "@/test/CustomFrameReadTestPage";
import CustomFramesListTestPage from "@/test/CustomFrameListTestPage";
import MyCustomFramesPageTest from "@/test/MyCustomFramesPageTest";
import BookmarkCustomFrameTestPage from "@/test/BookmarkCustomFrameTestPage";
import MyBookmarkCustomFrameTestPage from "@/test/MyBookmarkCustomFrameTestPage";
import TestPages from "@/test/TestPages";

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
    children: [{ index: true, element: <MakeBG /> }],
  },
  {
    path: "/selectframe/makebg/makesticker",
    children: [{ index: true, element: <MakeSticker /> }],
  },
  {
    path: "/selectframe/makebg/makesticker/saveframe",
    children: [{ index: true, element: <SaveFrame /> }],
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
  {
    path: RoutePath.CustomFrameCreateTest,
    children: [{ index: true, element: <CustomFrameCreateTestPage /> }],
  },
  {
    path: RoutePath.CustomFrameReadTest,
    children: [{ index: true, element: <CustomFrameReadTestPage /> }],
  },
  {
    path: RoutePath.CustomFrameListTest,
    children: [{ index: true, element: <CustomFramesListTestPage /> }],
  },
  {
    path: RoutePath.MyCustomFramesPageTest,
    children: [{ index: true, element: <MyCustomFramesPageTest /> }],
  },
  {
    path: RoutePath.BookmarkCustomFrameTest,
    children: [{ index: true, element: <BookmarkCustomFrameTestPage /> }],
  },
  {
    path: RoutePath.MyBookmarkCustomFrameTest,
    children: [{ index: true, element: <MyBookmarkCustomFrameTestPage /> }],
  },
  {
    path: RoutePath.Test,
    children: [{ index: true, element: <TestPages /> }],
  },
  {
    path: "/cameraframe",
    children: [{ index: true, element: <CameraFrameApp /> }],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
