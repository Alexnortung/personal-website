pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'apk update'
                sh 'apk add git'
                sh 'apk add openssh'
                sh 'npm install'
                sh 'npm run build'
                sh 'npm run generate'
            }
        }
        stage('deploy') {
            when {
                expression {
                    currentBuild.result == null || currentBuild.result == 'SUCCESS' 
                }
            }
            steps {
                withCredentials(bindings: [sshUserPrivateKey(credentialsId: 'jenkins-nortung.dk', keyFileVariable: 'SSH_KEY_FOR_NORTUNGDK')]) {
                    sh 'sh .jenkins/deploy.sh'
                }
            }
        }
    }
}