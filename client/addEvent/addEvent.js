AutoForm.addHooks(['addEventForm'],{
    onSuccess: function(formType, result) {
        Router.go('/displayEvents');
        toastr.success('Event created!');
    }
});
