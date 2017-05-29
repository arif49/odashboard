pipeline {
    agent any
    tools {
        nodejs 'Node 6.x'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'

                // publish html
                publishHTML target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'static',
                    reportFiles: 'statistics.html',
                    reportName: 'Webpack Build Report'
                ]
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'npm start'
            }
        }
    }
}