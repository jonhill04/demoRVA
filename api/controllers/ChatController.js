/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

create: function (req, res) {

	Chat.create(req.params.all(), function (err, chat) {

	Chat.publishCreate(chat);	

	return	res.redirect('/room');
				
		});	

//     Chat.find( function (err, chats) {
			
// 			res.view({
// 				chats: chats,
// 				errors: req.flash('error')
// 			});
// 		});
  },	

 rvajscreate: function (req, res) {

	Chat.create(req.params.all(), function (err, chat) {

	Chat.publishCreate(chat);	

	res.json(200, {
            chat: chat,
          });
				
		});	
  },	

room: function (req, res) {

    Chat.find().populate('senderUser').exec( function (err, chats) {
			
			res.view({
				chats: chats,
				errors: req.flash('error')
			});
		});
  },

rvajs: function (req, res) {

    Chat.find().populate('senderUser').exec( function (err, chats) {
			
		return	res.send({
				chats: chats,
				errors: req.flash('error')
			});
		});
  },
	
};

