var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var {Buyer} = require('../Models/buyer');
var {Owner} = require('../Models/owner');
var {Menu} = require('../Models/menu');
var {Sections} = require('../Models/sections')
var mongoose = require('../controllers/connection');


var userType = new GraphQLObjectType({
    name: 'buyer',
    fields: function () {
      return {
        FirstName: {
          type: GraphQLString
        },
        LastName: {
          type: GraphQLString
        },
        Email: {
          type: GraphQLString
        },
        Password: {
          type: GraphQLString
        }
        // Phone: {
        //   type: GraphQLString
        // }
        // RestaurantName: {
        //   type: GraphQLString
        // },
        // Cuisine: {
        //   type: GraphQLString
        // }
      }
    }
  });


  var userType1 = new GraphQLObjectType({
    name: 'owner',
    fields: function () {
      return {
        FirstName: {
          type: GraphQLString
        },
        // LastName: {
        //   type: GraphQLString
        // },
        Email: {
          type: GraphQLString
        },
        Password: {
          type: GraphQLString
        },
        // Phone: {
        //   type: GraphQLString
        // }
        RestaurantName: {
          type: GraphQLString
        },
        ZipCode: {
          type: GraphQLString
        }
      }
    }
  });


  var userType2 = new GraphQLObjectType({
    name: 'menu',
    fields: function () {
      return {
        item: {
          type: GraphQLString
        },
        // LastName: {
        //   type: GraphQLString
        // },
        desc: {
          type: GraphQLString
        },
        price: {
          type: GraphQLString
        },
        // Phone: {
        //   type: GraphQLString
        // }
        section: {
          type: GraphQLString
        },
        oEmail: {
            type: GraphQLString
          }
      }
    }
  });


  var userType3 = new GraphQLObjectType({
    name: 'section',
    fields: function () {
      return {
       
        section: {
          type: GraphQLString
        },
        
        oEmail: {
            type: GraphQLString
          }
      }
    }
  });


  var queryType = new GraphQLObjectType({
    name: 'Query',
    fields: function () {
      return {
    
        getRestaurants: {
          type: userType,
          resolve: function (root, params) {
            const restDetails = Owner.find().exec()
            if (!restDetails) {
              throw new Error('Error')
            }
            return restDetails
          }
        },

        getMenubyname : {
          type : userType2,
          args : {
            rName : {
              name : "rName",
              type : GraphQLString
            }
          },
          resolve : function(root,params) {
            const menuList = Menu.findOne({rName : params.rName});
            if(!menuList) {
              throw new Error('Error')
            }
            return menuList;
          }
        },

        getMenubyemail : {
            type : userType2,
            args : {
              oEmail : {
                name : "oEmail",
                type : GraphQLString
              }
            },
            resolve : function(root,params) {
              const menuList1 = Menu.findOne({Email : params.oEmail});
              if(!menuList1) {
                throw new Error('Error')
              }
              return menuList1;
            }
          }

      }
    }
  });

  const mutation = new GraphQLObjectType({
      name : 'Mutation',
      fields: {
              addBuyer : {
                  type: userType,
                  args : {
                      FirstName : {
                          type : GraphQLString
                      },
                      LastName : {
                          type : GraphQLString
                      },
                      Email : {
                          type : GraphQLString
                      },
                      Password : {
                          type : GraphQLString
                      }
                    //   Phone : {
                    //     type : GraphQLString
                    //   }
                  },
                  resolve : function(root, params) {
                      console.log("here")
                    //   const user = new Buyer(params);
                    //   const newUser = user.save();
                    //   if(!newUser) {
                    //       throw new Error('Error')
                    //   }
                    //   return newUser

                       let addBuyer = new Buyer({
                          FirstName : params.FirstName,
                          LastName : params.LastName,
                          Email : params.Email,
                          Password : params.Password
                        })
                        //const newUser = addBuyer.save();
                        addBuyer.save();
                        console.log("done",addBuyer)
                        return { 'message': "Successful signup"}
                  }
              },

              addOwner : {
                  type: userType1,
                  args : {
                    FirstName : {
                          type : GraphQLString
                      },
                      RestaurantName : {
                        type: GraphQLString
                      },
                      Email : {
                          type : GraphQLString
                      },
                      Password : {
                          type : GraphQLString
                      },
                      
                      ZipCode : {
                        type : GraphQLString
                      },
                   
                  },
                  resolve : function(root, params) {
                      console.log(params.FirstName)
                      let addOwner = new Owner({
                        FirstName : params.FirstName,
                        RestaurantName : params.RestaurantName,
                        Email : params.Email,
                        Password : params.Password,
                        ZipCode : params.ZipCode,
                      })
                      console.log("Signup successful")
                      //const newUser = addBuyer.save();
                      addOwner.save();
                     console.log("done",addOwner)
                      return { 'message': "Successful signup"}
                  }
              },

              addSections : {
                type: userType3,
                args : {
                    section : {
                        type : GraphQLString
                    },
                    
                    oEmail : {
                        type : GraphQLString
                    },
                 
                },
                resolve : function(root, params) {
                    console.log(params.section)
                    let addSections = new Sections({
                      section : params.section,
                      oEmail : params.oEmail
                    })
                    console.log("Section Added")
                    //const newUser = addBuyer.save();
                    addSections.save();
                   console.log("done",addSections)
                    return response
                }
            },

            addMenu : {
                type: userType2,
                args : {
                    section : {
                        type : GraphQLString
                    },
                    item : {
                        type : GraphQLString
                    },
                    desc : {
                        type : GraphQLString
                    },
                    price : {
                        type : GraphQLString
                    },
                    oEmail : {
                        type : GraphQLString
                    },
                 
                },
                resolve : function(root, params) {
                    console.log(params.section)
                    let addMenu = new Menu({
                      section : params.section,
                      oEmail : params.oEmail,
                      item: params.item,
                      desc: params.desc,
                      price: params.price,
                    })
                    console.log("Menu added")
                    //const newUser = addBuyer.save();
                    addMenu.save();
                   console.log("done",addMenu)
                    return response
                }
            },

              login : {
                    type : userType,
                    args : {
                      Email : {
                        type : GraphQLString
                      },
                      Password : {
                        type : GraphQLString
                      }
                    },
                    
                    resolve : function(root, params) {
                      const response = Buyer.findOne({Email : params.Email});
                      if(!response) {
                        console.log("here")
                        throw new Error('Error');
                      } 
                      console.log("logged in")
                      return response
                    }
              },

              ologin : {
                type : userType1,
                args : {
                  Email : {
                    type : GraphQLString
                  },
                  Password : {
                    type : GraphQLString
                  }
                },
                
                resolve : function(root, params) {
                  let response = Owner.findOne({Email : params.Email});
                  if(!response) {
                    console.log("inside owner login")
                    throw new Error('Error');
                  } 

                  console.log("owner logged in")
                  return response
                }
          },

              buyerProfileUpdate : {
                type : userType,
                args : {
                  FirstName : {
                    type : GraphQLString
                  },
                  LastName : {
                    type : GraphQLString
                  },
                  Email : {
                    type : GraphQLString
                  }
                },
                resolve : function(root, params) {
                  const response = Buyer.findOneAndUpdate({Email : params.Email}, {$set: {FirstName : params.FirstName, LastName : params.LastName, Email : params.Email}},{new:true});
                  if(!response) {
                    throw new Error('Error');
                  }
                  return response;
                }
              },

              ownerProfileUpdate : {
                type : userType1,
                args : {
                  FirstName : {
                    type : GraphQLString
                  },
                  Email : {
                    type : GraphQLString
                  }
                },
                resolve : function(root, params) {
                  const response = Owner.findOneAndUpdate({Email : params.Email}, {$set: {FirstName : params.FirstName, Email : params.Email}},{new:true});
                  if(!response) {
                    throw new Error('Error');
                  }
                  console.log("Owner details updated")
                  return response;
                }
              }
      }
  });

  module.exports = new GraphQLSchema({query: queryType, mutation : mutation});
