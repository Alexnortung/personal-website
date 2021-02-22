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
            steps {
                withCredentials(bindings: [sshUserPrivateKey(credentialsId: 'jenkins-nortung.dk', keyFileVariable: 'SSH_KEY_FOR_NORTUNGDK')]) {
                    sh 'sh .jenkins/deploy.sh'
                    // sh 'mkdir -p ~/.ssh'
                    // sh 'ssh-keyscan -t rsa nortung.dk >> ~/.ssh/known_hosts'
                    // sh 'eval "$(ssh-agent -s)"'
                    // sh 'ssh-add $SSH_KEY_FOR_NORTUNGDK'
                    // sh 'git remote add deploy "jenkins@nortung.dk:/var/www/nortung.dk"'
                    // sh 'git config user.name "Jenkins CI"'
                    // sh 'git config user.email "jenkins@nortung.dk"'
                    // echo "git config updated successfully"
                    // sh 'rm -f .gitignore'
                    // sh 'cp .jenkins/deployignore .gitignore'
                    // sh 'git add .'
                    // sh 'git status # debug'
                    // sh 'git commit -m "Deploy compressed files"'
                    // sh 'git push -f -u deploy HEAD:master'
                }
            }
        }
    }
}