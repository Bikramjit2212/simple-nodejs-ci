pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Sample Script') {
            steps {
                sh 'node app.js &'
                sh 'sleep 5'
                sh 'pgrep -f "node app.js"'
            }
        }
    }
}