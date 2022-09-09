<template>
    <div class="workspace">
        <v-card class="vcard" max-width="812px" color="#5485b4">
            <h1>ABOUT THE PROJECT</h1>
            <img alt="QuizAbout" class="center" src="/quizapp.png" />
            <p> The Sports Quiz in the Quiz tab contains random questions from the Open Trivia Database. In
                the API helper, you are given the chance to select the number of questions, category, difficulty,
                type, and the encoding. 
                <br><br>
                In this case we chose the sports category, containing 10 questions, with the difficulty of easy, 
                with multiple choice questions, while also using the default encoding.
                <br><br>
                The quiz will show the number of questions, as well as your current score. Each time you click on
                your desired, it will show if what you've chose is correct. Green being the indicator that it is correct
                while red being the indicator that it is wrong.
                <br><br>
                That is all the information you need to know about the Sports Quiz! Have fun!
            </p>
        </v-card>
    </div>
</template>

<script>
</script>

<style scoped>
.center {
    color: white;
}

.vcard {
    font-family: "Gotham Medium", Helvetica, Arial;
    padding: 25px 25px 25px 25px;
}

.workspace h1 {
    color: white;
    font-family: "Gotham Bold", Helvetica, Arial;
    font-weight: 500;
}

.workspace {
    color: white;
    font-family: "Gotham Medium", Helvetica, Arial;
    margin-right: 50%;
    padding-left: 5%;
    height: 100%;
    width: 100%;
    font-size: 20px;
}
.workspace p{
    color: white;
}
</style>


