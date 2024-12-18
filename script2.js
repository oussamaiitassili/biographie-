function calculateScore() {
    var score = 0;
    var totalQuestions = 10;
    var correctAnswers = {
        q1: "JavaScript",
        q2: "Git",
        q3: "Java",
        q4: "Un espace mémoire pour stocker des valeurs",
        q5: "Un ensemble de bibliothèques pour faciliter le développement",
        q6: "Python",
        q7: "Un ensemble d'instructions pour résoudre un problème",
        q8: "Stocker et gérer des données",
        q9: "PHP",
        q10: "Faciliter la création de l'interface utilisateur"
    };

    var explanations = [];

    for (var i = 1; i <= totalQuestions; i++) {
        var selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswers[`q${i}`]) {
                score++;
            } else {
                explanations.push(`Question ${i}: Vous avez choisi "${selectedAnswer.value}". La bonne réponse est "${correctAnswers[`q${i}`]}".`);
            }
        } else {
            explanations.push(`Question ${i}: Vous n'avez pas répondu.`);
        }
    }

   
    var resultat = document.getElementById("resultat");
    resultat.innerHTML = `
        <p>Votre score est de <strong>${score}/${totalQuestions}</strong>.</p>
        <p>${score === totalQuestions ? "Félicitations ! Vous avez répondu correctement à toutes les questions !" : "Voici les réponses correctes pour les questions auxquelles vous avez répondu incorrectement:"}</p>
        <ul>${explanations.map(explanation => `<li>${explanation}</li>`).join('')}</ul>
    `;
}
