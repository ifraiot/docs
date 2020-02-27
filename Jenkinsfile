pipeline {
    agent any
    tools {nodejs "node"}

    environment { 
        dockerImage = ''
        committerEmail = sh (
            script: 'git --no-pager show -s --format=\'%ae\'',
            returnStdout: true
        ).trim()
    }

    stages {
        
        stage('Build Services') {
            steps {
              sh 'ls -la'
              sh 'docker version'
              script{
                dockerImage = docker.build("ifrasoft/ifra-docs",".")
              }

             
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('', 'docker-user' ) {
                        dockerImage.push(env.BUILD_ID)
                     
                    }
                }
            }
        }
        stage('Deployment K8S') {
            steps {
                sh "cat docs-deployment.yaml | sed 's/{{IFRA_CMS_TAG}}/${env.BUILD_ID}/g' | kubectl apply -f -"
            }
        }

 
    }
    post {
        always {
            echo 'One way or another, I have finished'
            deleteDir() /* clean up our workspace */
           
        }
         
    }
}
 