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
                    reportFiles: 'webpack.html',
                    reportName: 'Webpack Build Report'
                ]
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'

                // publish html
                publishHTML target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'report',
                    reportFiles: 'mocha.html',
                    reportName: 'Mocha Test Report'
                ]
            }
        }
        stage('Deploy') {
            steps {
                echo 'npm start'
            }
        }
    }
}