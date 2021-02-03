function feedback() {
    // Вылетает текст от фидбека
    var feedbackText = document.querySelector('.complete-message');

    var formFeedback = document.querySelector('.formFeedback');
    var valueMessage = document.querySelector('.inputFeedback');
    $.ajax({
        url: 'feedback.php',
        method: 'POST',
        data: {
            'name': valueMessage.value
        },
    });
    if (valueMessage.value !== "") {
        feedbackText.style.display = "block";
        setTimeout(function () {
            feedbackText.style.display = "none";
        }, 3000)
    }
    return false;
};
