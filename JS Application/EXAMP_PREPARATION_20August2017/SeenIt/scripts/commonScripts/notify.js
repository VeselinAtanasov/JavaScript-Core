let notify = (() => {

    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });

    /**
     * Function responsible for displaying notifications
     * @param {*} message
     */
    function showInfo(message) {
        let infoBox = $('#infoBox').on('click', () => infoBox.hide());
        infoBox.find('span').text(message);
        infoBox.fadeIn();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }
    /**
     * Function responsible for displaying error notifications
     * @param {*} message
     */
    function showError(message) {
        let errorBox = $('#errorBox').on('click', () => errorBox.hide());
        errorBox.find('span').text(message);
        errorBox.fadeIn();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    /**
     * Function for error handling
     * @param {*} reason
     */
    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    return {
        showInfo,
        showError,
        handleError
    }
})();