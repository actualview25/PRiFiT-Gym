var APP_DATA = {
  "scenes": [
    {
      "id": "0-prift-gym-interface",
      "name": "PRifT Gym InterFace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.0
      },
      "linkHotspots": [
        {
          "yaw": 0.2587154926854165,
          "pitch": 0.724321638185426,
          "rotation": 0,
          "target": "1-privit--reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-privit--reception",
      "name": "PRiViT  reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.0
      },
      "linkHotspots": [
        {
          "yaw": -0.7907216236925407,
          "pitch": 0.4355731557452973,
          "rotation": 0,
          "target": "2-hall11"
        },
        {
          "yaw": 1.1218134707313858,
          "pitch": 0.5423969978993846,
          "rotation": 0,
          "target": "4-hall21"
        },
        {
          "yaw": -2.917084495550192,
          "pitch": 0.5269113473329909,
          "rotation": 0,
          "target": "0-prift-gym-interface"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hall11",
      "name": "hall1.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.0
      },
      "linkHotspots": [
        {
          "yaw": -2.681046532527537,
          "pitch": 0.584710561277241,
          "rotation": 0,
          "target": "1-privit--reception"
        },
        {
          "yaw": 1.9946984910943586,
          "pitch": 0.43593247505217647,
          "rotation": 0,
          "target": "3-hall12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hall12",
      "name": "hall1.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.0
      },
      "linkHotspots": [
        {
          "yaw": -1.6850919549296712,
          "pitch": 0.4650443090457532,
          "rotation": 0,
          "target": "2-hall11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hall21",
      "name": "hall2.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.0
      },
      "linkHotspots": [
        {
          "yaw": -0.2423970685709076,
          "pitch": 0.4202295481213376,
          "rotation": 0,
          "target": "5-hall2-2"
        },
        {
          "yaw": 3.065416173619095,
          "pitch": 0.43144502519165506,
          "rotation": 0,
          "target": "1-privit--reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-hall2-2",
      "name": "hall2-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.0
      },
      "linkHotspots": [
        {
          "yaw": -3.122538581365017,
          "pitch": 0.23209657236832015,
          "rotation": 0,
          "target": "4-hall21"
        },
        {
          "yaw": -1.5730706842225253,
          "pitch": 0.4037194759456568,
          "rotation": 0,
          "target": "6-hall23"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-hall23",
      "name": "hall2.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.0
      },
      "linkHotspots": [
        {
          "yaw": -0.2219979330516395,
          "pitch": 0.6213081984834314,
          "rotation": 0,
          "target": "7-hall24"
        },
        {
          "yaw": -2.917789729089133,
          "pitch": 0.56904956987775,
          "rotation": 0,
          "target": "5-hall2-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-hall24",
      "name": "hall2.4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.08119990399638866,
        "pitch": 0.2180647351189542,
        "fov": 1.0
      },
      "linkHotspots": [
        {
          "yaw": -1.3719857764009742,
          "pitch": 0.44153269539530093,
          "rotation": 0,
          "target": "6-hall23"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
