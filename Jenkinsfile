pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
                sh 'npm run generate'
            }
        }
        stage('deploy') {
            steps {
                withCredentials(bindings: [sshUserPrivateKey(credentialsId: 'jenkins-nortung.dk', keyFileVariable: 'SSH_KEY_FOR_NORTUNGDK')]) {
                    sh '.jenkins/deploy.sh'
                }
            }
        }
    }
}