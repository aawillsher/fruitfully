# fruitfully
A Meteor project

Fruitfully is a Meteor project in progress. 

Users can track their contacts and the events at which they met new contacts. The "source" of an item (contact or event) is the contact which referred the user to that item or the event where the user met or learned of the item. A "referral" is a contact or event which has a source. 

The value of a contact is provided by the concept of a fruit. A fruit is a user-defined field for a contact. If the user wants to track how much revenue is generated by a contact, the user creates 'revenue' as a fruit field. Example: Contact 'Bob' provides revenue of $50,000. So Bob has a fruit value for revenue of $50,000. 

By tracking sources and referrals, and by recording the fruit values of their contacts, users can track the success of their networking and discover which contacts and events have been the most productive. 

Possible future features and improvements:
Shared/multi-user accounts
Boolean-type Fruit Fields, e.g., does this Contact subscribe to my newsletter?
Flexible search, e.g., find all Contacts in Toronto with a Referral Value for Revenue more than $5,000
ROI metrics, e.g., what was the Referral Value in revenue/cost for an Event?
Preventing circularity in Sources and Referrals. At the moment a user can save Contact A as the Source for Event B and Event B as the Source for Contact A. This will produce errors when generating Referral Values.
Although the 'insecure' and 'autopublish' packages have been removed, users should not save any sensitive information to the database. 

Feedback should be sent to aawillsher at hotmail dot com. 
