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
            }
        }
        stage('Test') {
            steps {
                echo 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'npm start'
            }
        }
    }
}