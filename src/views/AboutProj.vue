<template>
    <div class="workspace">
        <v-card class="vcard" max-width="812px" color="#5485b4">
            <h1>ABOUT THE PROJECT</h1>
            <h1>INFO-RELATED</h1>
            <h2>[PERSONAL INFORMATION]</h2>
            <p> This shows the basic information of Raphael Daniel Lazaro.
                <br><br>
            </p>
            <h2>[VUETIFY RESEARCH]</h2>
            <p> This shows the necessary information of about Vuetify.
                <br><br>
            </p>
            <h1>LABORATORIES</h1>
            <img alt="Math" src="/math.png" />
            <p> The basic calculator that I've created consists of buttons for addition, subtraction, division, multiplication,
                and the average. Once you've inputted two numbers and pressing the button of your choice, it will display the total.
            </p>
            <img alt="String" src="/string_manipulator.png" />
            <p> The string manipulation consists of a single button to count and convert. Upon clicking this, it will show the number of
                vowels, numbers, and consonants in the given string that the user inputted. Also, there is a part where it converts
                all the vowels in the string into an asterisk (*).

            </p>
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
    font-family: "Gotham Medium", Helvetica, Arial;
    font-weight: 500;
}
.workspace h2 {
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


