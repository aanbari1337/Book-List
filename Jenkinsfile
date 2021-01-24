pipeline{
  agent{ docker {image 'node:14-alpine'} }
  stages{
    stage('build'){
      steps{
        echo "running....."
        sh 'npm i'
        sh 'npm start'
      }
    }
  }
}
