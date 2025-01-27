const RoutePath = {
  /* 로그인 페이지 */
  Login: "/",
  Signup: "/signup",
  Main: "/main",

  /* 프레임 페이지 */
  Frame: "/frames",
  FrameDetail: "/frames/:customFrameId",
  FrameHot: "/frames/hot",
  FrameBackground: "/frames/background",
  FrameSticker: "/frames/sticker",
  FrameDownload: "/frames/download",
  FrameCamera: "/frames/camera/:id",
  FrameCameraDownload: "/frames/camera/download",

  /* 보관함 페이지 */
  Storage: "/storages",
  MyFrame: "/storages/my-frames",
  SavedFrame: "/storages/saved-frames",
  Gallery: "/storages/galleries",
  GalleryDetail: "/storages/galleries/:id",

  /* 테스트 페이지 */
  Test: "/test",
  UsersTest: "/test/users-test",
  StickerTest: "/test/stickers-test",
  FrameBackgroundCreateTest: "/test/frame-background-create-test",
  FrameCreateTest: "/test/frame-create-test",
  FrameViewTest: "/test/frame-view-test",
  PhotoCreateTest: "/test/photo-create-test",
  PhotoListTest: "/test/photo-list-test",
  CustomFrameCreateTest: "/test/custom-frame-create-test",
  CustomFrameReadTest: "/test/custom-frame-read-test",
  CustomFrameListTest: "/test/custom-frame-list-test",
  MyCustomFramesPageTest: "/test/my-custom-frame-test",
  BookmarkCustomFrameTest: "/test/custom-frame-bookmark-test",
  MyBookmarkCustomFrameTest: "/test/my-bookmark-custom-frame-test",
};

export default RoutePath;
