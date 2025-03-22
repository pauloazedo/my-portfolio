pipeline {
  agent any

  environment {
    DEPLOY_DIR = '/deploy'
    SITE_DIR   = '/site'
  }

  stages {
    stage('Checkout') {
      steps {
        git credentialsId: 'github-deploy-key',
            url: 'git@github.com:pauloazedo/my-portfolio.git',
            branch: 'main'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      steps {
        sh 'rm -rf $DEPLOY_DIR/*'
        sh 'cp -r out/* $DEPLOY_DIR/'
        sh "docker-compose -f $SITE_DIR/docker-compose.yml restart web"
      }
    }
  }

  post {
    success {
      echo 'Deployment successful'
    }
    failure {
      echo 'Build or deploy failed'
    }
  }
}