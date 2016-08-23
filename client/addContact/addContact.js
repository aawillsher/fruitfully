AutoForm.addHooks(['addContactForm'],{
    onSuccess: function(formType, result) {
        Router.go('/displayContacts');
        toastr.success('Contact created!');
    }
});
