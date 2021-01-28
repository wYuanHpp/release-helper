import simpleGit from "simple-git";
/*
{
  isWorkSpaceEmpty:true,
  getLastReleaseVersion: true, 
  getLastPreReleaseVersion: true,  
  preRelease: true,
  release: true,
}
*/

interface PublishHelperOption {}

class PublishHelper {
  constructor(option: PublishHelperOption) {}
  git = simpleGit();

  async isWorkSpaceEmpty() {
    return this.git
      .status()
      .then(({ not_added, conflicted, created, deleted, modified }) =>
        [not_added, conflicted, created, deleted, modified].every(
          (arr) => !arr.length
        )
      )
  }

  getLastReleaseVersion() {}

  getLastPreReleaseVersion() {}

  preRelease() {}

  release() {}
}

export default PublishHelper;
