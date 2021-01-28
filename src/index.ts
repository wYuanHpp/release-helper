import simpleGit from 'simple-git';
/*
{
  isWorkSpaceEmpty:true,
  getLastReleaseVersion: true, 
  getLastPreReleaseVersion: true,  
  preRelease: true,
  release: true,
}
*/

interface PublishHelperOption {

}


class PublishHelper {
  constructor(option: PublishHelperOption) {
  }
  git = simpleGit();

  isWorkSpaceEmpty() {
    this.git.status().then((result) => console.log(result)) 
  } 

  getLastReleaseVersion() {

  }

  getLastPreReleaseVersion() {

  }

  preRelease() {

  }

  release() {

  }
}

export default PublishHelper;