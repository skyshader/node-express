class BaseController {
  index() {
    return 'This is index action of base controller!';
  }
}

module.exports = (new BaseController());
