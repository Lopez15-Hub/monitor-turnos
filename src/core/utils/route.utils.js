
export class RouteUtils {
  static renderJsRoute(router, file) {
    router.get(`/scripts/${file}`, (_, res) => {
      res.sendFile(`${process.cwd()}/src/public/assets/js/${file}.js`);
    });
  }
  static renderAssetsRoute(router, assetFolder, file, type) {
    router.get(`/${assetFolder}/${file}`, (_, res) => {
      res.sendFile(
        `${process.cwd()}/src/public/assets/${assetFolder}/${file}.${type}`
      );
    });
  }
}
