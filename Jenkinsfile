pipeline{
  agent{ docker {image 'node:14-alpine'} }
  stages{
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('build'){
      steps{
        echo "running....."
        sh 'npm i'
        sh 'npm start'
      }
    }
  }
}
