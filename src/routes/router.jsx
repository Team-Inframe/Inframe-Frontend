import RoutePath from "./routePath";
import { MainPage } from "@/pages/Main/page";
import LoginPage from "@/pages/Auth/Login/page";
import SignupPage from "@/pages/Auth/Signup/page";
import { createBrowserRouter } from "react-router-dom";
import { MyFramePage } from "@/pages/Storage/MyFrame/page";
import { StoragePage } from "@/pages/Storage/page";
import { SavedFramePage } from "@/pages/Storage/SavedFrame/page";
import StickersTestPage from "@/test/StickersTestPage";
import FrameViewTestPage from "@/test/FrameViewTestPage";
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
import FrameCreatePage from "@/pages/FrameCreate/Info/page";
import { FrameDetailPage } from "@/pages/Frame/[id]/page";
import { HotFramePage } from "@/pages/HotFrame/page";
import { GalleryPage } from "@/pages/Storage/Gallery/page";
import { FrameCameraDownloadPage } from "@/pages/Frame/Download/page";
import { GalleryDetailPage } from "@/pages/Storage/Gallery/[id]/page";
import FrameCameraPage from "@/pages/Frame/Camera/page";
import { LatestFramePage } from "@/pages/LatestFrame/page";

const routes = [
  {
    path: RoutePath.Login,
    children: [
      { index: true, element: <LoginPage /> },
      { path: RoutePath.Signup, element: <SignupPage /> },
      { path: RoutePath.Main, element: <MainPage /> },
    ],
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
      { path: RoutePath.FrameDetail, element: <FrameDetailPage /> },
      { path: RoutePath.FrameHot, element: <HotFramePage /> },
      { path: RoutePath.FrameLatest, element: <LatestFramePage /> },
      { path: RoutePath.FrameBackground, element: <FrameBackgroundPage /> },
      { path: RoutePath.FrameSticker, element: <FrameStickerPage /> },
      { path: RoutePath.FrameDownload, element: <FrameDownloadPage /> },
      { path: RoutePath.FrameCamera, element: <FrameCameraPage /> },
      {
        path: RoutePath.FrameCameraDownload,
        element: <FrameCameraDownloadPage />,
      },
    ],
  },
  {
    path: RoutePath.Storage,
    children: [
      { index: true, element: <StoragePage /> },
      { path: RoutePath.MyFrame, element: <MyFramePage /> },
      { path: RoutePath.SavedFrame, element: <SavedFramePage /> },
      { path: RoutePath.Gallery, element: <GalleryPage /> },
      { path: RoutePath.GalleryDetail, element: <GalleryDetailPage /> },
    ],
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
];

const Router = createBrowserRouter(routes);

export default Router;
