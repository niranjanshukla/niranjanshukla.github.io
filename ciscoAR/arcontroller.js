window.addEventListener('load', function() {
  var menu_open = false;

  window.awe.init({
    device_type: awe.AUTO_DETECT_DEVICE_TYPE,
    settings: {
      container_id: 'container',
      fps: 30,
      default_camera_position: { x:0, y:0, z:0 },
      default_lights: [{
        id: 'point_light',
        type: 'point',
        color: 0xFFFFFF
      }]
    },
    ready: function() {
      awe.util.require([
        {
          capabilities: ['gum','webgl'],
          files: [
            ['lib/awe-standard-dependencies.js', 'lib/awe-standard.js'],
            'lib/awe-standard-window_resized.js',
            'lib/awe-standard-object_clicked.js',
            'lib/awe-jsartoolkit-dependencies.js',
            'lib/awe.marker_ar.js'
          ],
          success: function() {
            window.awe.setup_scene();

            // Points of Interest
            awe.pois.add({id: 'marker', position: {x: 0, y: 0, z: 10000}, visible: false});

            awe.projections.add({
              id: 'ar_button_one',
              geometry: {shape: 'sphere', radius: 20},
              rotation: {y: 45},
              position: {x: -5, y: -31, z: -5},
              material: {
                type: 'phong',
                color: 0xFF0000
              }
            }, {poi_id: 'marker'});

            awe.projections.add({
              id: 'ar_button_two',
              geometry: {shape: 'sphere', radius: 10},
              rotation: {y: 45},
              position: {x: 45, y: -31, z: -5},
              material: {
                type: 'phong',
                color: 0xFF6600
              }
            }, {poi_id: 'marker'});

            awe.projections.add({
              id: 'ar_button_three',
              geometry: {shape: 'sphere', radius: 10},
              rotation: {y: 45},
              position: {x: 75, y: -31, z: -5},
              material: {
                type: 'phong',
                color: 0xFFFF00
              }
            }, {poi_id: 'marker'});

            awe.projections.add({
              id: 'ar_button_four',
              geometry: {shape: 'sphere', radius: 10},
              rotation: {y: 45},
              position: {x: 60, y: 61, z: -5},
              material: {
                type: 'phong',
                color: 0xFFFFFF
              }
            }, {poi_id: 'marker'});

            awe.projections.add({
              id: 'ar_button_five',
              geometry: {shape: 'sphere', radius: 10},
              rotation: {y: 45},
              position: {x: -75, y: -25, z: -5},
              material: {
                type: 'phong',
                color: 0x00FF00
              }
            }, {poi_id: 'marker'});

            awe.projections.add({
              id: 'ar_button_six',
              geometry: {shape: 'sphere', radius: 10},
              rotation: {y: 45},
              position: {x: -45, y: -61, z: -5},
              material: {
                type: 'phong',
                color: 0x0080FF
              }
            }, {poi_id: 'marker'});

            awe.projections.add({
              id: 'ar_button_seven',
              geometry: {shape: 'sphere', radius: 10},
              rotation: {y: 45},
              position: {x: -30, y: -82, z: -5},
              material: {
                type: 'phong',
                color: 0x8000FF
              }
          }, {poi_id: 'marker'});

          



            awe.events.add([{
              id: 'ar_tracking_marker',
              device_types: {
                pc: 1,
                android: 1
              },
              register: function(handler) {
                window.addEventListener('ar_tracking_marker', handler, false);
              },
              unregister: function(handler) {
                window.removeEventListener('ar_tracking_marker', handler, false);
              },
              handler: function(event) {
                if (event.detail) {
                  if (event.detail['64']) {
                    awe.pois.update({
                      data: {
                        visible: true,
                        position: {x: 0, y: 0, z: 0},
                        matrix: event.detail['64'].transform
                      },
                      where: {
                        id: 'marker'
                      }
                    });


                      awe.projections.update({
                        data: {
                          animation: {
                            duration: 1
                          },
                          position: {y: -31}
                        },
                        where: {id: 'ar_button_one'}
                      });

                      awe.projections.update({
                        data: {
                          animation: {
                            duration: 1
                          },
                          position: {y: -31}
                        },
                        where: {id: 'ar_button_two'}
                      });

                      awe.projections.update({
                        data: {
                          animation: {
                            duration: 1
                          },
                          position: {y: -31}
                        },
                        where: {id: 'ar_button_three'}
                      });

                      awe.projections.update({
                        data: {
                          animation: {
                            duration: 1
                          },
                          position: {y: 61}
                        },
                        where: {id: 'ar_button_four'}
                      });

                      awe.projections.update({
                        data: {
                          animation: {
                            duration: 1
                          },
                          position: {y: -25}
                        },
                        where: {id: 'ar_button_five'}
                      });

                      awe.projections.update({
                        data: {
                          animation: {
                            duration: 1
                          },
                          position: {y: -61}
                        },
                        where: {id: 'ar_button_six'}
                      });

                      awe.projections.update({
                        data: {
                          animation: {
                            duration: 1
                          },
                          position: {y: -82}
                        },
                        where: {id: 'ar_button_seven'}
                      });



                  }
                  awe.scene_needs_rendering = 1;
                }
              }
            }]);

            window.addEventListener('object_clicked', function(e) {
              switch (e.detail.projection_id) {
                case 'ar_button_one': awe.projections.update({
                  data: {
                    animation: {
                      duration: 1
                    },
                    position: {y: -25}
                  },
                  where: {id: 'ar_button_one_text'}
                });
                break;

                case 'ar_button_two':
                awe.projections.update({
                  data: {
                    animation: {
                      duration: 1
                    },
                    position: {y: -25}
                  },
                  where: {id: 'ar_button_two_text'}
                });
                break;
                case 'ar_button_three':
                awe.projections.update({
                  data: {
                    animation: {
                      duration: 1
                    },
                    position: {y: -25}
                  },
                  where: {id: 'ar_button_three_text'}
                });
                break;
                case 'ar_button_four':
                awe.projections.update({
                  data: {
                    animation: {
                      duration: 1
                    },
                    position: {y: -70}
                  },
                  where: {id: 'ar_button_four_text'}
                });
                break;
                case 'ar_button_five':
                awe.projections.update({
                  data: {
                    animation: {
                      duration: 1
                    },
                    position: {y: -20}
                  },
                  where: {id: 'ar_button_five_text'}
                });
                break;
                case 'ar_button_six':
                awe.projections.update({
                  data: {
                    animation: {
                      duration: 1
                    },
                    position: {y: -70}
                  },
                  where: {id: 'ar_button_six_text'}
                });
                break;
                case 'ar_button_seven':
                awe.projections.update({
                  data: {
                    animation: {
                      duration: 1
                    },
                    position: {y: -90}
                  },
                  where: {id: 'ar_button_seven_text'}
                });
                break;
              }
            }, false);
          } // success()
        },
        {
          capabilities: [],
          success: function() {
            document.body.innerHTML = '<p>Try this demo in the latest version of Chrome or Firefox on a PC or Android device</p>';
          }
        }
      ]); // awe.util.require()
    } // ready()
  }); // window.awe.init()
}); // load
