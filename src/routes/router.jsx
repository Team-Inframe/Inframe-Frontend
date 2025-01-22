import { HotFramePage } from "@/pages/HotFramePage/page";
// import { GalleryPage } from "@/pages/Storage/Gallery/page";
import RoutePath from "./routePath";
import { MainPage } from "@/pages/Main/page";
// import { MyFramePage } from "@/pages/Storage/MyFrame/page";
// import { StoragePage } from "@/pages/Storage/page";
// import { SavedFramePage } from "@/pages/Storage/SavedFrame/page";
import CameraFrameApp from "@/pages/CameraFrame/page";
import UsersTestPage from "@/test/UsersTestPage";
import StickersTestPage from "@/test/StickersTestPage";
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
import FrameBackgroundPage from "@/pages/FrameCreate/Background/page";
import FrameStickerPage from "@/pages/FrameCreate/Sticker/page";
import FrameDownloadPage from "@/pages/FrameCreate/Download/page";
import FrameCreatePage from "@/pages/FrameCreate/page";
import { FrameDetailPage } from "@/pages/FrameDetail/page";
import LoginPage from "@/pages/LoginPage/page";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: "/login",
    children: [{ index: true, element: <LoginPage /> }],
  },
  {
    path: RoutePath.HotFrame,
    children: [{ index: true, element: <HotFramePage /> }],
  },
  {
    path: RoutePath.GetFrame,
    children: [{ index: true, element: <FrameDetailPage /> }],
  },
  {
    path: RoutePath.Frame,
    children: [
      { index: true, element: <FrameCreatePage /> },
      { path: RoutePath.FrameBackground, element: <FrameBackgroundPage /> },
      { path: RoutePath.FrameSticker, element: <FrameStickerPage /> },
      { path: RoutePath.FrameDownload, element: <FrameDownloadPage /> },
    ],
  },
  {
    // path: RoutePath.Storage,
    // children: [
    //   { index: true, element: <StoragePage /> },
    //   { path: RoutePath.MyFrame, element: <MyFramePage /> },
    //   { path: RoutePath.SavedFrame, element: <SavedFramePage /> },
    //   { path: RoutePath.Gallery, element: <GalleryPage /> },
    // ],
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
    path: RoutePath.Storage,
    children: [{ index: true, element: <CameraFrameApp /> }],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
