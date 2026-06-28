/* ============================================================================
   SAW-Bench — Data Viewer examples
   ----------------------------------------------------------------------------
   Auto-generated from si_eval data/*.json + results/<type>/2/<model>.jsonl (2 fps).
   6 random examples per task; each shows 5 models' predictions + reasoning.
   Schema: { video, question, options:[...], answer:<idx>,
             models:[{ name, choice:<idx>, note:<reasoning> }] }
   ============================================================================ */

window.SAW_EXAMPLES = {
  "loc": [
    {
      "video": "./static/videos/4_3.mp4",
      "question": "Are you positioned near the corner, along the side, or near the center of the lecture hall?",
      "options": [
        "Side",
        "Center",
        "Corner"
      ],
      "answer": 2,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 0,
          "note": "The video starts with a view out of a window, then pans across a wall to reveal a large lecture hall. The camera is positioned in the aisle along the side wall of the hall, next to the windows. It is not in the center of the seating area, nor is it specifically tucked into a corner; it is clearly along the side of the room."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 0,
          "note": "The video begins with me looking out a large window. I then pan my head to the right, revealing that I am standing in an aisle. To my right are rows of lecture hall seats that fill the main body of the room. The window I was looking out of runs along the entire length of the wall to my left. This places me in an aisle on the side of the lecture hall, not in the center among the seats, nor in a corner where two solid walls would meet."
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": "The viewpoint stays next to the wall/windows and a side aisle with a railing, looking across the rows toward the screen rather than being among the central seats."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 0,
          "note": "The video shows the person moving into a lecture hall, with the camera capturing the side wall (perforated panels, concrete pillars, and windows along the side) and rows of seats viewed from the side. The layout and perspective indicate the position is along the side, not the center (which would involve central rows) or corner (a different angular view)."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 0,
          "note": "The video shows the camera moving along the side of the lecture hall, with the view including the side wall, large windows, and rows of seats aligned along the side. This indicates the position is along the side of the lecture hall."
        }
      ]
    },
    {
      "video": "./static/videos/1_2.mp4",
      "question": "Are you positioned near the corner, along the side, or near the center of the office?",
      "options": [
        "Side",
        "Center",
        "Corner"
      ],
      "answer": 2,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 2,
          "note": "The video begins with a view of a large office space from one end. As the camera pans to the right, it moves towards a wall of windows. Around the 00:20.000 mark, the camera is positioned directly in the corner where the window wall meets another wall. Throughout the video, the camera remains near the perimeter of the room, specifically focusing on and moving through a corner area before panning back across the room from a side/corner perspective. It is never near the center of the office."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 0,
          "note": "The video begins with a view of a classroom or office space. I am standing near a long table. I then pan my head to the right, revealing a long wall lined with windows. My position is adjacent to this wall. I am not in the center of the room, as I am right next to the windows. I am also not in a corner, as I can see the room extending to my left and right along the wall. Therefore, I am positioned along the side of the room."
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": "The viewpoint stays close to the row of windows and the adjacent wall, indicating the position is along the side of the office rather than the center or a corner."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 0,
          "note": "The video shows the camera moving along the side of the office, focusing on the windows and then the adjacent wall. The perspective and movement indicate the position is along the side rather than the corner or center."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 0,
          "note": "The video shows the camera moving along the side of the room, particularly focusing on the windows and the adjacent wall, indicating the position is along the side of the office."
        }
      ]
    },
    {
      "video": "./static/videos/11_7.mp4",
      "question": "Are you positioned near the corner, along the side, or near the center of the lacrose court?",
      "options": [
        "Center",
        "Corner",
        "Side"
      ],
      "answer": 2,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 2,
          "note": "The video shows a 360-degree pan of a lacrosse/soccer field. Starting from frame 00:00.000, I am looking across the field. As I pan to the right, I see a white line on the ground (frame 00:01.500). Continuing the pan, I face a wall with benches and storage units (frames 00:08.000 to 00:15.000), which clearly marks the boundary or edge of the field. I am standing very close to this boundary. Since I am at the edge of the field but not at a point where two boundaries meet (a corner), I am positioned along the side of the court."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 0,
          "note": "The video begins with a view of one end of a sports field, with a goal visible in the distance. As I pan my head to the right, a long, straight white line comes into view, which I am standing very close to. This line appears to be the midfield line, as it divides the field in half. A large circle, the center circle, is also visible in the middle of the field. As I continue to pan, I see the other end of the field, which also has a goal."
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": "The frames show the midfield line running straight ahead and the center circle, indicating the viewpoint is near the middle of the field rather than at a corner or just along a sideline."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 2,
          "note": "The video shows the person moving along the field with blue and white lines visible, which likely represent the sidelines of the lacrosse court. The presence of fences, benches, and structures along the side (e.g., frames 10-15) indicates the person is positioned near the sideline rather than the center or corner. The shadow in frame 10 also aligns with being close to the side boundary."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 2,
          "note": "The video shows the person moving along the side of the field, with visible boundary lines (blue and white) and structures like benches and fences along the perimeter, indicating they are positioned along the side of the court."
        }
      ]
    },
    {
      "video": "./static/videos/10_4.mp4",
      "question": "Are you positioned near the corner, along the side, or near the center of the lawn?",
      "options": [
        "Side",
        "Center",
        "Corner"
      ],
      "answer": 0,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 2,
          "note": "At the beginning of the video (00:00.000), I am standing on a large lawn, positioned very close to a bush on my left. As I perform a 360-degree pan (from 00:00.000 to 00:29.000), it becomes clear that the vast majority of the lawn area is in front of me and to my right. I am standing near the edge of the grass, specifically at a point where the boundary of the lawn seems to turn or meet another feature (the bush and the area near the building), which characterizes a corner position rather than being in the center or along a straight side."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 2,
          "note": ""
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": "The frames show the camera close to landscaping (bushes/trees) and adjacent walkways/buildings along the lawn’s boundary, looking out across the open grass rather than being surrounded by it, indicating a position along the side rather than the center or a distinct corner."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 2,
          "note": "In the initial frame (0.3s), the person is near a bush on the left and a building in front. As the video progresses, the movement suggests being at a point where the lawn meets two boundaries (the building and the bush area), indicating a corner position rather than the center or along a single side. The return to the starting area in the final frame (29.7s) confirms proximity to a corner where the lawn intersects with surrounding structures."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 0,
          "note": "The video shows the camera moving along the edge of the lawn, with buildings and pathways visible on one side, indicating the position is along the side of the lawn."
        }
      ]
    },
    {
      "video": "./static/videos/9_8.mp4",
      "question": "Are you positioned near the corner, along the side, or near the center of the parking lot?",
      "options": [
        "Corner",
        "Center",
        "Side"
      ],
      "answer": 1,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 1,
          "note": "The video shows a 360-degree pan of the surroundings from a fixed point in a parking lot. Starting from 00:00.000, the camera faces a large building. As it pans right, it reveals more parking spaces, other buildings, a sign, trees, and eventually returns to the original building. Throughout the entire rotation, parking spaces and the asphalt of the lot are visible in all directions. This indicates that the person is positioned near the center of the parking lot area, rather than at a corner or along one of the sides."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 2,
          "note": "The video begins with me standing in a parking space, looking at a building across a large, mostly empty parking lot. As I pan my head to the right, I reveal more of the parking lot. Crucially, at around the 0:09 mark, it becomes clear that I am positioned in a parking space that is adjacent to a concrete curb and a landscaped median strip. This median strip runs parallel to the row of parking spaces I am in. If I were in the center of the lot, I would expect to see rows of parking spaces in all directions."
        },
        {
          "name": "GPT-5.2",
          "choice": 2,
          "note": "The view stays near the edge of the parking lot with a curb/landscaped strip and trees close by, indicating I’m along the perimeter rather than in the middle or at a distinct corner."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 1,
          "note": "The video shows the person moving through the parking lot, with cars and structures visible on multiple sides. The presence of parking spaces and vehicles in all directions (not just along one edge or at a corner) suggests the position is near the center of the lot."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 2,
          "note": "The video shows the person moving along the edge of the parking lot, passing by buildings, trees, and parked cars that are aligned along the perimeter. This indicates the person is positioned along the side of the parking lot, not the center or a corner."
        }
      ]
    },
    {
      "video": "./static/videos/5_7.mp4",
      "question": "Are you positioned near the corner, along the side, or near the center of the decomposed granite courtyard?",
      "options": [
        "Center",
        "Corner",
        "Side"
      ],
      "answer": 2,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 2,
          "note": ""
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 2,
          "note": "The video begins with a view of a concrete building and a paved area. As I pan my head to the right, a large courtyard filled with decomposed granite and palm trees is revealed. I am standing on the paved walkway that runs alongside this courtyard. My perspective is from the edge or side of the courtyard, looking across it. I am not in the center, as I am on the pavement, not the granite. I am not at a corner, as the pan follows a straight line along the edge of the courtyard. Therefore, I am positioned along the side of the courtyard."
        },
        {
          "name": "GPT-5.2",
          "choice": 2,
          "note": "Across the frames, the view is from the boundary where the paved brick/sidewalk area meets the decomposed granite courtyard with palm trees, indicating we’re along the edge rather than the center or a distinct corner."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 2,
          "note": "The video shows the camera moving through the decomposed granite courtyard (visible from frames 8-26). In frames 26-29, the camera is clearly at the boundary between the decomposed granite area and the paved brick walkway. The camera transitions from the granite area to the paved area, indicating it's positioned along the side of the courtyard rather than at the center or a sharp corner."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 0,
          "note": "The decomposed granite courtyard is the sandy area with palm trees. The camera moves through this area, and in multiple frames (e.g., 12-17), the view shows the camera positioned in the middle of the open space with palm trees on all sides, indicating it is near the center of the courtyard. There is no indication of being at a corner (B) or along the side (C), as the surrounding elements (palm trees, buildings) are symmetrically distributed around the camera's position, suggesting a central location."
        }
      ]
    }
  ],
  "dir": [
    {
      "video": "./static/videos/11_44.mp4",
      "question": "From my viewing point at the end of this video, where am I located at the beginning of the video?",
      "options": [
        "Back right",
        "Back",
        "Back left",
        "Same location"
      ],
      "answer": 1,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 3,
          "note": "At the beginning of the video (00:00.000), I am standing on a green field facing a building with construction cranes to the left. Throughout the video, I rotate my head/body to the right and left multiple times, scanning the field and the surrounding structures (scoreboard, light poles, tents). By the end of the video (00:52.000), I am facing the same building from the same distance and orientation as at the start."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 1,
          "note": "1. **Analyze the starting position (0:00):** I am standing on a green artificial turf field, likely near the center circle, which is marked by a white curved line. In the distance, directly in front of me, is a large building. To the far left, construction cranes are visible. To the right, there is a scoreboard and some trees. My shadow is cast directly in front of me. 2. **Analyze the movement throughout the video:** I pan my head left and right, showing the full width of the field. Then, I appear to walk forward."
        },
        {
          "name": "GPT-5.2",
          "choice": 1,
          "note": "Across the frames the viewpoint moves forward toward the fence/buildings; from the end position, the starting position would be behind (back) along the field."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 2,
          "note": "To determine the initial position relative to the final viewing point, we analyze the movement trajectory. The video shows continuous movement across the field, with changing perspectives of structures (fences, cranes, buildings) and field markings. At the end (frame 52.7s), the orientation relative to the starting frame (0.3s) indicates the beginning location is in the **back left** direction. This is inferred from the shift in visible landmarks and field line patterns, which align with a leftward and backward displacement from the final viewpoint."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 2,
          "note": "Analyzing the video frames, the camera moves across the field. At the end of the video (frame 53), the view is of the field with the fence and scoreboard on the right. The starting point (frame 1) shows the building on the left side of the frame. From the end position, the starting position is behind (back) and to the left (left) of the current view, which corresponds to 'Back left' (option C)."
        }
      ]
    },
    {
      "video": "./static/videos/1_34.mp4",
      "question": "From my viewing point at the beginning of this video, where am I located at the end of the video?",
      "options": [
        "Same location",
        "Front right",
        "Front",
        "Front left"
      ],
      "answer": 2,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 2,
          "note": "At the beginning of the video (00:00.000), I am standing at one end of a large room, looking towards the opposite wall where there are grey cabinets and a shelf. As the video progresses, I move straight forward through the room, passing tables and chairs. By the end of the video (00:23.000), I have reached the wall with the grey cabinets and am standing directly in front of it. Therefore, relative to my starting position, I am now at the 'Front'."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 2,
          "note": "At the beginning of the video, I am standing at one end of a long room. I can see desks to my right and a wall with whiteboards to my left. At the far end of the room, directly in front of me, is a counter with cabinets. Throughout the video, I walk straight forward down the aisle, moving towards the counter at the far end of the room. The video ends with me standing directly in front of a section of that far wall, specifically in front of a white panel next to the counter. Therefore, relative to my starting position, my final location is directly in front."
        },
        {
          "name": "GPT-5.2",
          "choice": 3,
          "note": "At the start I’m facing into the room toward the far wall with cabinets. Over the frames I move forward toward that far wall and end up very close to the cabinets/wall area on the left side of my original view, indicating I walked to the front and slightly left."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 2,
          "note": "The video shows the camera moving forward through the room. At the beginning, the view is from the back of the room, and by the end, the camera is positioned closer to the front (near the cabinets and wall). Thus, the location at the end is in front of the initial position."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 3,
          "note": "The video shows the camera moving forward and to the left, approaching the area near the whiteboard and the cabinet on the left side of the room, which corresponds to the front left position."
        }
      ]
    },
    {
      "video": "./static/videos/10_42.mp4",
      "question": "From my viewing point at the end of this video, where am I located at the beginning of the video?",
      "options": [
        "Left",
        "Back left",
        "Same location",
        "Right"
      ],
      "answer": 2,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 2,
          "note": "The video begins with a view of a multi-story building and a large grassy field. As the video progresses, the camera pans continuously to the right, completing a full 360-degree rotation. By the end of the video (around 00:41.500), the camera is once again facing the same multi-story building and grassy field seen at the very beginning. Since the camera only rotated in place and did not translate to a different position, the location at the beginning of the video is the same as the location at the end of the video."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 2,
          "note": "The video begins with a view of a large grassy area with a building on the left. I then pan my head to the right, completing a full 360-degree turn. The video ends with the exact same view as it started with. This indicates that I did not change my physical location, but simply rotated in place. Therefore, at the end of the video, I am in the same location as I was at the beginning."
        },
        {
          "name": "GPT-5.2",
          "choice": 2,
          "note": "The end view matches the beginning view (same lawn, same buildings/trees positioned similarly), indicating I stayed in the same spot and mainly panned/turned."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 2,
          "note": "The video frames show a continuous pan where the final frame (42) closely resembles the initial frame (1), indicating the camera has completed a full 360-degree rotation. Thus, the starting location is the same as the ending location from the perspective of the end of the video."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 2,
          "note": "The first and last frames of the video show the same landscape (a building on the left, grassy field, and similar sky). Since the video appears to be a continuous loop where the ending view matches the starting view, the location at the beginning of the video is the same as the location at the end. Thus, the correct answer is C."
        }
      ]
    },
    {
      "video": "./static/videos/12_18.mp4",
      "question": "From my viewing point at the end of this video, where am I located at the beginning of the video?",
      "options": [
        "Back right",
        "Right",
        "Same location",
        "Back"
      ],
      "answer": 0,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 0,
          "note": "At the beginning of the video (00:00.000), I am standing behind a breakfast bar, looking into the kitchen. The kitchen sink and window are visible in the background, positioned slightly to the left of my center of vision. As the video progresses, I move into the kitchen and eventually stand directly in front of the sink, facing the window (00:31.500). From this final position (facing the sink), my initial starting point behind the breakfast bar would be located behind me and to my right. Therefore, relative to my viewing point at the end, I was located at the 'Back right' at the beginning."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 0,
          "note": "1. **Identify the final location:** The video ends with me standing directly in front of the kitchen sink, looking out the window above it. My final position is inside the kitchen, by the counter with the sink. 2. **Identify the initial location:** The video begins with me standing outside the main kitchen area. I am looking at a brick breakfast bar with two stools. To my right is a wall with wood paneling and a large hanging plant. The kitchen is visible beyond the breakfast bar. 3. **Trace the path of movement:** I start near the breakfast bar. I move forward, passing the bar on my left."
        },
        {
          "name": "GPT-5.2",
          "choice": 3,
          "note": "At the start I’m standing by the bar counter with stools and a plant, looking into the kitchen. By the end I’m up at the sink/window inside the kitchen. So the beginning location is behind (back) relative to my final viewing point."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 3,
          "note": ""
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 3,
          "note": "The video starts with a view of the kitchen bar area (including stools and a plant on the right). As the video progresses, the camera moves towards the main kitchen area, eventually focusing on the window and sink. From the final position (end of the video, near the window), the starting position (beginning of the video) is located behind the current view, which corresponds to 'Back'."
        }
      ]
    },
    {
      "video": "./static/videos/14_33.mp4",
      "question": "From my viewing point at the end of this video, where am I located at the beginning of the video?",
      "options": [
        "Back right",
        "Right",
        "Back",
        "Same location"
      ],
      "answer": 0,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 0,
          "note": "At the beginning of the video (00:00.000), I am standing near a tree and a wooden bench, looking at a building with blue awnings. As the video progresses, I turn right (00:01.500) to see a blue umbrella and outdoor seating. I then walk towards and past this blue umbrella area (00:18.500 - 00:25.000). By the end of the video (00:32.500), I am standing in an open courtyard area facing palm trees and benches, with the blue umbrella and the initial tree area behind me."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 0,
          "note": "1. **Identify the final position and orientation:** The video ends with me standing under a large blue umbrella, looking out into a paved courtyard. This is my final reference point. 2. **Identify the starting position:** I need to determine where I was at the very beginning of the video before any significant movement occurred. The video starts with a panoramic sweep of the courtyard. However, from 0:04 to 0:08, the view is relatively stable. During this time, I am standing on a concrete walkway. To my immediate left is a flowerbed with yellow flowers and a wooden bench."
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": "By the end, I’m standing under/next to the large open blue umbrella looking out across the courtyard toward the palm trees and benches. At the start, the view is from the opposite side near the large tree/bench area and the other seating/umbrella zone, which from the end position lies behind me and to my right."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 2,
          "note": "To determine the location, analyze the spatial relationship between the start and end frames. At the beginning (frame 1), a bench is in the foreground. At the end (frame 33), this same bench appears in the background, indicating the starting position is behind the ending position. Thus, the answer is 'Back' (option C)."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 0,
          "note": "The video starts at a position with a bench, yellow flowers, and a tree (frame 1). By the end (frame 33), the view is under a blue umbrella looking towards the building with palm trees. To determine the start position from the end's viewpoint, we reverse the movement. The start position (frame 1) is located in the back right direction relative to the end's viewpoint (frame 33), so the answer is A."
        }
      ]
    },
    {
      "video": "./static/videos/8_39.mp4",
      "question": "From my viewing point at the end of this video, where am I located at the beginning of the video?",
      "options": [
        "Front right",
        "Back right",
        "Right",
        "Same location"
      ],
      "answer": 2,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 3,
          "note": "At the beginning of the video (00:00.000), the camera is facing the ocean and a black SUV. As the video progresses, the camera pans slowly to the right, showing the pier, then the inland area with palm trees and buildings, and finally a black pickup truck and a large palm tree. Throughout this entire sequence, the camera's position relative to the parking lines on the ground remains constant, and there is no vertical bobbing motion that would indicate walking. The camera is simply rotating in place."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 3,
          "note": "The video consists of a continuous panoramic sweep from left to right. I start by looking at the ocean and a pier. Then, I turn my head and body to the right, panning across the parking lot. The view changes from the oceanfront to the inland side of the lot, with hills in the background. Throughout this pan, there is no indication of me walking or changing my physical position within the parking lot. The movement is smooth and rotational. Therefore, my physical location at the beginning of the video is the same as my physical location at the end; only my viewing direction has changed."
        },
        {
          "name": "GPT-5.2",
          "choice": 3,
          "note": "Across the frames the viewpoint mainly pans/rotates to the right (from ocean/pier view to inland/palm trees) without clear positional displacement, so the starting location is the same as the ending location."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 1,
          "note": "The video begins near the ocean with the pier visible, and the camera moves through the parking lot away from the ocean. By the end, the camera is in a section of the parking lot farther from the ocean. The initial position (near the ocean) is to the right of the final position when viewed from the end. Since the camera moved forward and away from the initial location, the beginning point is behind and to the right from the end position, corresponding to \"Back right.\""
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 1,
          "note": "The video starts with the camera facing the ocean and pier (initial view). As the video progresses, the camera moves through the parking lot, changing direction. By the end, the camera is in a different part of the lot. From the end's viewing point, the beginning location is behind and to the right, which corresponds to option B."
        }
      ]
    }
  ],
  "shape": [
    {
      "video": "./static/videos/1_8.mp4",
      "question": "What's the shape of my moving trajectory?",
      "options": [
        "Circle",
        "Triangle",
        "Square",
        "In-place orientation"
      ],
      "answer": 3,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 3,
          "note": "The video shows a continuous 360-degree pan to the right. Starting from a window at 00:00.000, the camera rotates past desks, whiteboards, a cabinet with water jugs, and doors, eventually returning to the same window at the end of the video. The perspective remains consistent with someone standing in one spot and turning around. This movement is an in-place orientation."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 3,
          "note": "The video begins with a view of a windowed wall in a classroom or office. I then pan my head to the right, revealing a wall with a projector screen and a whiteboard. Continuing the pan to the right, I see another wall with more whiteboards and a door. The pan continues, showing a fourth wall with a counter, water cooler, and another door. Finally, the pan completes a full 360-degree rotation, returning to the initial view of the windowed wall. Throughout this entire sequence, my position within the room does not appear to change significantly."
        },
        {
          "name": "GPT-5.2",
          "choice": 3,
          "note": "Across the frames, the viewpoint mainly pans/rotates smoothly from the window side to the right wall (whiteboard/door) and then back toward the windows, with no clear forward/sideways displacement pattern like a circle/triangle/square—indicating primarily in-place orientation changes."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 0,
          "note": "The video shows a continuous pan around the room, starting from one side and moving to the other, then back again. This suggests a circular or sweeping motion. However, since the camera returns to its original position, it forms a complete circle. Therefore, the shape of the moving trajectory is a circle."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 0,
          "note": "The video shows the camera moving around the room in a continuous loop, covering different areas and returning to the starting point, which forms a circular trajectory."
        }
      ]
    },
    {
      "video": "./static/videos/9_3.mp4",
      "question": "What's the shape of my moving trajectory?",
      "options": [
        "In-place orientation",
        "U-Shape",
        "Manhattan-style piecewise linear",
        "L-Shape"
      ],
      "answer": 0,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 0,
          "note": "The video shows a continuous rotation of the camera from a fixed or nearly fixed position. Starting from a view of handicap parking spaces (00:00.000), the camera pans right, passing a building and trees (00:05.000), a white SUV (00:08.000), a circular building with many bicycles (00:15.000), and utility boxes under a tree (00:20.000), eventually returning to the initial view of the handicap parking spaces (00:25.000 - 00:29.500). This 360-degree pan indicates that the person is rotating in place rather than moving along a path like a U-shape, L-shape, or Manhattan-style trajectory."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 0,
          "note": "The video begins with a view of handicapped parking spaces and a walkway. I then pan my head to the right, surveying the surrounding parking lot, several buildings, and a large bike rack. The panning motion continues in a smooth, continuous arc until the view returns to the initial starting point, looking at the handicapped parking spaces again. Throughout the video, my position does not change; I am standing in one spot and simply rotating my head or body to look around in a full circle."
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": "Across the frames, the viewpoint mainly rotates from left toward the right (scanning the parking lot/buildings) and then rotates back toward the original direction, with little clear forward translation—consistent with mostly in-place orientation."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 1,
          "note": "The video shows a continuous movement through the parking lot, where the path starts at one point, moves through various sections, and then returns to a position near the starting area, forming a U-shaped trajectory. This is evident from the sequence of frames that capture the movement from the initial parking spots, around the lot, and back toward the original direction, indicating a U-shape rather than linear or other shapes."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 1,
          "note": "The video starts at a certain point in the parking lot, moves through various areas (showing different parking spots, buildings, cars, and bike racks), and then returns to a position similar to the starting point, forming a U-shaped path. This matches option B."
        }
      ]
    },
    {
      "video": "./static/videos/5_45.mp4",
      "question": "What's the shape of my moving trajectory?",
      "options": [
        "Square",
        "L-Shape",
        "U-Shape",
        "Manhattan-style piecewise linear"
      ],
      "answer": 0,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 0,
          "note": "The video shows the camera moving in a sequence of straight paths followed by approximately 90-degree left turns. 1. From 00:00.000 to 00:05.000, the camera moves straight along one side of a courtyard. 2. Around 00:05.500, there is a clear left turn. 3. From 00:06.000 to 00:10.000, the camera moves straight along the second side. 4. Around 00:10.500, there is another left turn. 5. From 00:11.000 to 00:15.000, the camera moves straight along the third side. 6. Around 00:15.500, there is a third left turn. 7. From 00:16.000 to 00:20.500, the camera moves straight along the fourth side."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 2,
          "note": "1. **Initial Movement (00:00 - 00:04):** I begin by moving forward through a gravel area with palm trees, heading towards a paved walkway and modern buildings. My direction is relatively straight. 2. **Turning Point (00:05 - 00:10):** I start a significant turn to my left. My view pans from the buildings in front of me towards a building on my left with blue umbrellas. This is the beginning of a curve in my path. 3. **Completing the Turn (00:11 - 00:20):** I continue the leftward turn, walking along a curved path."
        },
        {
          "name": "GPT-5.2",
          "choice": 1,
          "note": "Across the frames, my viewpoint advances while making one main turn (from facing the café/building area to facing across the open plaza), consistent with a single-corner, L-shaped trajectory rather than a square/U or many piecewise turns."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 3,
          "note": "The video shows the camera (wearer) moving through a campus-like area with multiple straight segments connected by right-angle turns (e.g., turning right in early frames, then left later, and other directional changes). This pattern of movement with right-angle turns between straight paths matches the description of a \"Manhattan-style piecewise linear\" trajectory, as opposed to a simple square, L-shape, or U-shape which would involve fewer or closed segments."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 2,
          "note": "The video shows the camera moving around a courtyard. The path taken by the camera appears to form a U-shape, as it moves forward, then turns around and moves back along a similar path, creating a U-like trajectory. This matches option C."
        }
      ]
    },
    {
      "video": "./static/videos/0_25.mp4",
      "question": "What's the shape of my moving trajectory?",
      "options": [
        "Triangle",
        "Square",
        "U-Shape",
        "Manhattan-style piecewise linear"
      ],
      "answer": 3,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 2,
          "note": "The video shows a first-person perspective of someone moving through an outdoor area with buildings and a grassy field. By analyzing the movement: 1. From approximately 00:01.5 to 00:11.0, the person walks in a straight line across the grass towards a blue fence/sports field. 2. Around 00:11.5 to 00:12.5, the person makes a clear left turn. 3. From 00:13.0 to 00:22.5, the person walks in a second straight line towards a building with a yellow light. 4. Around 00:23.0 to 00:24.0, the person makes another clear left turn. 5."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 2,
          "note": "The video begins with me facing a building complex. I then turn left and walk in a straight line, with the building on my right and a sports field on my left. After walking for a bit, I make a right turn, walking a short distance towards the side of the building. Then, I make another left turn and walk in a straight line again, parallel to my initial path but in the opposite direction. This trajectory—a straight line, a turn, a short connecting line, another turn, and a final straight line parallel to the first—forms a distinct U-shape."
        },
        {
          "name": "GPT-5.2",
          "choice": 2,
          "note": "View starts at courtyard buildings, then turns toward the sports field/mountains, then returns toward the building (door side) and turns back toward the courtyard—overall moving out and back in a curved return path resembling a U-shape."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 3,
          "note": "Analyzing the sequence of frames, the movement involves multiple turns at right angles (e.g., shifting from viewing buildings to the field, then to another building, and finally to a larger building complex). This pattern of directional changes with linear segments and right-angle turns matches the Manhattan-style piecewise linear trajectory, where movement follows a grid-like path with orthogonal turns."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 2,
          "note": "The video shows the camera moving left towards an open field, then turning right towards a building, and then moving left again towards another set of buildings. This path forms a U-shape, as the movement goes out and then back along a similar line, creating a U pattern."
        }
      ]
    },
    {
      "video": "./static/videos/0_24.mp4",
      "question": "What's the shape of my moving trajectory?",
      "options": [
        "Manhattan-style piecewise linear",
        "In-place orientation",
        "U-Shape",
        "Square"
      ],
      "answer": 0,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 2,
          "note": "The video shows the person's movement through an outdoor area with buildings and a field. 1. From 00:00.000 to 00:01.000, the camera is facing a sports field and then turns left. 2. From 00:01.500 to 00:10.000, the person moves forward towards a building (Segment 1). 3. At 00:10.500, the person turns left again. 4. From 00:11.500 to 00:25.500, the person moves forward across a lawn towards another part of the building complex (Segment 2). 5. At 00:26.000, the person turns left a third time. 6. From 00:27.500 to 00:40.500, the person moves forward towards an entrance/archway (Segment 3)."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 0,
          "note": "1. **Analyze the camera's movement throughout the video.** * **00:00 - 00:01:** The video starts with a view of a field. I then pan my head to the left, bringing a building into view. I appear to be standing on a grassy lawn. * **00:01 - 00:10:** I remain stationary, looking at the side of this building. My position does not change, only my head might have slight movements. * **00:10 - 00:11:** I perform another quick pan to the left, sweeping across the grassy lawn. * **00:11 - 00:26:** I am now facing the main facade of a larger building complex."
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": "The view first rotates from the sports field toward the buildings (a turn in place), then there is forward translation across the grass toward the walkway/archway. This indicates a piecewise path with a turn followed by a straight segment rather than a U-shape or square."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 2,
          "note": "The video starts with a view of a field and buildings in the distance. As the frames progress, the camera moves to the left, showing different parts of the building complex. The movement is smooth and continuous, with the camera panning around the area. The path taken appears to be a U-shape as the camera starts from one side, moves around the front of the building, and ends up on the opposite side from where it started. This matches the description of a U-Shape trajectory."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 2,
          "note": "The video shows the camera moving from one side of the building complex, then to the front, and then to the other side, forming a U-shaped path around the central lawn. This matches the U-Shape option."
        }
      ]
    },
    {
      "video": "./static/videos/1_20.mp4",
      "question": "What's the shape of my moving trajectory?",
      "options": [
        "Manhattan-style piecewise linear",
        "U-Shape",
        "Circle",
        "In-place orientation"
      ],
      "answer": 0,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 0,
          "note": "The video shows the camera moving through an office or classroom environment. 1. From 00:00.000 to approximately 00:04.500, the camera moves straight forward down an aisle between desks. 2. Around 00:05.000, the camera makes a sharp left turn (approximately 90 degrees) and moves toward a whiteboard on the wall. 3. Around 00:09.500, the camera makes another sharp left turn (approximately 90 degrees) and moves forward toward a different section of the room with cabinets and a red chair. 4. Around 00:15.000, the camera makes a third sharp left turn."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 0,
          "note": "The video begins with me standing at one end of a classroom, looking down an aisle between two rows of tables. I then proceed to walk straight down this aisle towards the far wall. This is the first linear segment of my movement. After reaching the end of the aisle, I stop walking forward and turn my head to the right, panning across the back of the room. Then, I turn my head back to the left."
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": "I move forward toward the front wall/whiteboard, then make a rightward turn to look across the room, indicating a piecewise linear (L/Manhattan-style) walking path rather than a U-shape, circle, or just turning in place."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 0,
          "note": "The video shows the camera moving forward towards the whiteboard, then turning right and moving forward again, followed by additional directional changes. These movements consist of straight-line segments with right-angle turns, matching the 'Manhattan-style piecewise linear' trajectory description."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 0,
          "note": "The camera moves in straight segments along the room's axes (e.g., forward towards whiteboards, then turning to move along walls), forming right-angle turns. This matches the 'Manhattan-style piecewise linear' description, as the motion consists of linear segments connected by 90-degree turns, typical of navigating a grid-like space like a room."
        }
      ]
    }
  ],
  "revplan": [
    {
      "video": "./static/videos/5_20.mp4",
      "question": "From my viewpoint at the end of the video, how can I go back to my starting point?",
      "options": [
        "Turn around, go straight. Turn right, go straight, then turn left and continue go straight.",
        "Turn around, go straight. Turn right, go straight, then turn right and continue go straight.",
        "Turn around, go straight. Turn left, go straight, then turn right and continue go straight.",
        "Turn around, go straight. Turn left, go straight, then turn left and continue go straight."
      ],
      "answer": 0,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 3,
          "note": ""
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 0,
          "note": "1. **Analyze my initial position and movement.** The video starts with me standing and looking at a gravel area with palm trees, with a grassy lawn in the background. 2. **First movement (00:00 - 00:10):** I pan my head to the right. This is equivalent to a right turn. 3. **Second movement (00:10 - 00:20):** I walk straight forward, moving deeper into the gravel area, generally towards a tan building that came into view after the right turn. 4. **Third movement (00:20 - 00:21):** I pan my head to the left, turning to face the grassy lawn area again. This is a left turn. 5."
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": "The video starts facing the grassy area from the palm-tree gravel section, then I turn right toward the beige building area, and later turn left to face the grass again near the wall. To return, reverse those moves: turn around and go straight back, then turn right, go straight, then turn left and continue straight."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 1,
          "note": "From the end of the video, reversing the path requires turning around and following the opposite direction of the previous movement. Analyzing the sequence of turns in the video, the path to return to the starting point involves turning around, going straight, then turning right, straight, and right again, which matches option B."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 3,
          "note": "To determine the path back to the starting point, we analyze the movement from the end of the video. The starting point is the initial gravel area with palm trees. The video shows the person moving through different areas, including turning directions. When reversing the path, the sequence of turns must be mirrored. Option D describes turning around first, then a left turn followed by another left turn, which aligns with the reverse of the observed movement in the video to return to the starting point."
        }
      ]
    },
    {
      "video": "./static/videos/5_24.mp4",
      "question": "From my viewpoint at the end of the video, how can I go back to my starting point?",
      "options": [
        "Turn around, go straight. Turn left, go straight, then turn right and continue go straight.",
        "Turn around, go straight. Turn left, go straight, then turn left and continue go straight.",
        "Turn around, go straight. Turn right, go straight, then turn left and continue go straight.",
        "Turn around, go straight. Turn right, go straight, then turn right and continue go straight."
      ],
      "answer": 0,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 0,
          "note": "To determine the path back to the starting point, I first need to trace the forward path taken in the video: 1. The video starts facing a grassy area with tents (00:00.000). 2. I turn left (00:01.000) and walk straight past a building (Summit Cafe). 3. I turn left again (00:11.500) and walk straight through a courtyard with palm trees. 4. I turn right (00:27.000) and walk straight towards the building again. To go back to the starting point from the end: 1. Turn around (180 degrees). 2. Go straight. 3. Turn left (this reverses the right turn made at 00:27.000). 4. Go straight. 5."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 0,
          "note": "1. **Analyze the starting point and initial movement:** The video begins with me on a gravel path, looking towards a grassy lawn. I then pan my head to the left, revealing a sunken gravel area with several palm trees, and a modern building with a cafe in the background. This initial pan to the left can be interpreted as the first turn in my journey. 2. **Analyze the main part of the journey:** Around 0:12, I start walking forward. My path takes me straight through the sunken gravel area with the palm trees. 3."
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": "At the start, the view is toward the lawn/event area; by the end, the view is toward the cafe building with blue umbrellas. Reversing the route shown by the camera’s movements, you should turn around and retrace by going straight, then turning left, going straight again, then turning right and continuing straight to return to the original viewpoint."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 1,
          "note": "To determine the path back to the starting point, the movement must retrace the original path in reverse. The video ends near a building with blue umbrellas (frame 35). Starting from this endpoint, turning around and going straight reverses the final segment. The original path likely involved two right turns to reach the endpoint, so reversing would require two left turns. Option B specifies turning left twice after going straight, which aligns with retracing the path."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 3,
          "note": "To determine the path back to the starting point, we reverse the movement observed in the video. The video starts with a view of a lawn and tent (initial position), then the camera moves through the area. At the end (frame 35), the viewpoint is in front of the building with blue umbrellas. Reversing the path: first, turn around (180-degree turn) to face the starting direction, go straight. Then, the sequence of turns from the original path (when going forward) must be reversed."
        }
      ]
    },
    {
      "video": "./static/videos/13_26.mp4",
      "question": "From my viewpoint at the end of the video, how can I go back to my starting point?",
      "options": [
        "Turn around, go straight. Turn right, go straight, then turn left and continue go straight.",
        "Turn around, go straight. Turn left, go straight, then turn left and continue go straight.",
        "Turn around, go straight. Turn right, go straight, then turn right and continue go straight.",
        "Turn around, go straight. Turn left, go straight, then turn right and continue go straight."
      ],
      "answer": 2,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 0,
          "note": "The video begins with the camera facing a set of glass doors (the starting point). The camera then turns right and walks towards a long table with chairs. After reaching the table, it turns around and walks back to the junction where it started, then turns right to face the doors and walks closer to them. At the doors, it turns left and walks towards a round table with purple chairs, where the video ends. To return to the starting point from the round table, one would need to: 1. Turn around and walk back towards the doors. 2."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 2,
          "note": "1. **Analyze the starting point and orientation:** The video begins with me facing a wall of glass doors that look out onto a grassy field. I am positioned somewhere in the middle of a large room. 2. **Trace the path of movement:** * First, I pan my head to the right, surveying the room. I see a lounge area with a TV, then a seating area with long tables, and finally the corner of a ping pong table. This establishes the layout of the room relative to my starting position. * Next, I walk forward and to the right, towards the long tables against the back wall."
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": "At the end you are near the right-side glass doors/windows by the sanitizer stand, facing toward the interior. To return to the original view facing the central doors, you would turn around and walk straight along the doors, then turn right to head back into the open area, and finally turn left to align back toward the starting viewpoint."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 0,
          "note": "The video starts at the main doors with three sets of large glass doors. The sequence moves through the room, eventually ending near a round table and a door. To return to the start, from the end position: turn around (facing away from the round table), go straight (toward the doors with the sanitizer station), turn right (aligning with the path toward the TV and main doors), go straight (along the doors), then turn left to reach the initial main doors area. This matches option A."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 1,
          "note": "The video starts with a view of a room with glass doors leading outside. The camera then pans around the room, showing various furniture arrangements and features. At the end of the video, the camera is positioned near the glass doors, facing a different part of the room. To return to the starting point (the initial view of the glass doors), the person needs to move back along the path they took.  1. From the final position (near the glass doors, looking towards the room), turning around would face the person in the direction of the room's interior. 2."
        }
      ]
    },
    {
      "video": "./static/videos/0_24.mp4",
      "question": "From my viewpoint at the end of the video, how can I go back to my starting point?",
      "options": [
        "Turn around, go straight. Turn right, go straight, then turn right and continue go straight.",
        "Turn around, go straight. Turn right, go straight, then turn left and continue go straight.",
        "Turn around, go straight. Turn left, go straight, then turn left and continue go straight.",
        "Turn around, go straight. Turn left, go straight, then turn right and continue go straight."
      ],
      "answer": 3,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 3,
          "note": ""
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 2,
          "note": "1. **Analyze the path taken:** I start on a grassy area, looking at a field (let's define this direction as North). I then pan my view left (to West) to see the side of a building. I pan left again (to South) to see the front of a large building complex across a wide lawn. Finally, I walk in a straight line across the lawn towards the building complex (South). My physical movement is a straight line from the North side of the lawn to the South side. 2. **Analyze the reverse path:** The most direct way back is to turn around and walk straight back across the lawn (North)."
        },
        {
          "name": "GPT-5.2",
          "choice": 2,
          "note": "In the video you start facing the fenced field, then turn left toward the buildings, later turn right to face the main building across the lawn, and turn right again to face the passageway where the video ends. Reversing that route from the end means: turn around and go straight back, then turn left and go straight, then turn left again and continue straight to return to the starting point."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 2,
          "note": "To determine the path back to the starting point, reverse the camera's movement sequence. The video shows the camera turning left (frame 1.3), then right (frame 11.4), then left (frame 27.5) while moving. To reverse, the path requires undoing these turns. At the end (frame 40.7), turning around (facing away from the current building) and going straight retraces the last segment. The previous turn to reach this point was a left turn, so reversing it requires a left turn. The prior turn (right) is reversed by another left turn."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 3,
          "note": "To determine the path back to the starting point, we analyze the movement sequence. The video shows the camera moving from the starting point (first frame with tennis court and mountains) towards the building with the tree (frames 0-10), then to the large apartment building (frames 10-26), then to the walkway (frames 26-40)."
        }
      ]
    },
    {
      "video": "./static/videos/4_30.mp4",
      "question": "From my viewpoint at the end of the video, how can I go back to my starting point?",
      "options": [
        "Turn around, go straight. Turn right, go straight, then turn right and continue go straight.",
        "Turn around, go straight. Turn left, go straight, then turn right and continue go straight.",
        "Turn around, go straight. Turn right, go straight, then turn left and continue go straight.",
        "Turn around, go straight. Turn left, go straight, then turn left and continue go straight."
      ],
      "answer": 3,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 3,
          "note": "The video starts at a window, turns right into a hallway, turns right into a lecture hall, and finally turns right to face another window. To return, I must turn around, go straight back up the aisle, turn left into the hallway, go straight, and turn left to face the original window."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 3,
          "note": "1. **Analyze the starting point and initial movement:** The video begins with me looking out a large window with a dotted pattern at a courtyard (00:00). I then turn my head to the right (00:01) and begin walking straight. 2. **Trace the path through the building:** * I walk along a gray wall, which is on my left. On my right, a lecture hall with rows of seats opens up (00:02-00:03). I am in the aisle on the far-left side of the room. * I continue walking straight down this left-side aisle toward the front of the lecture hall (00:04-00:11)."
        },
        {
          "name": "GPT-5.2",
          "choice": 3,
          "note": "At the start I was facing the outdoor windows, then I turned right to face the interior wall/aisle, later turned right again toward the room/screen, and finally turned right to face the windows at the end. Reversing that route from the end requires turning around, going straight, then making two left turns with straight segments in between."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 3,
          "note": "The video starts outside (frame 0), enters a building through a door, moves through a corridor with chairs on the right, turns left into a main room, and ends at the far side of the main room (frame 32). To return to the starting point: 1) Turn around (face the projection screen/corridor entrance). 2) Go straight through the main room (back to the corridor entrance). 3) Turn left to enter the corridor (since the corridor was on the left when entering the main room in frame 12-13). 4) Go straight through the corridor (toward the exit door)."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 1,
          "note": "To determine the path from the end of the video (frame 32) back to the starting point (frame 0), we reverse the movement sequence observed in the video:1. From frame 32 (window), turn around (180°) to face the lecture hall (opposite of the window direction).2. Move straight through the lecture hall (reversing the forward movement toward the windows).3. At the point where the lecture hall connects to the corridor, turn left (reversing the right turn made when entering the lecture hall).4. Move straight through the corridor (reversing the forward movement toward the lecture hall).5."
        }
      ]
    },
    {
      "video": "./static/videos/14_27.mp4",
      "question": "From my viewpoint at the end of the video, how can I go back to my starting point?",
      "options": [
        "Turn around, go straight. Turn right, go straight, then turn left and continue go straight.",
        "Turn around, go straight. Turn left, go straight, then turn left and continue go straight.",
        "Turn around, go straight. Turn left, go straight, then turn right and continue go straight.",
        "Turn around, go straight. Turn right, go straight, then turn right and continue go straight."
      ],
      "answer": 2,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 2,
          "note": "To determine the path back to the starting point, I first analyzed the forward path taken in the video. The video begins at 00:00.000 facing a building with a blue tiled fountain. The camera then pans right and moves toward a seating area with blue sofas. At approximately 00:10.000, the camera turns left and moves back toward the fountain area, following a person. At 00:22.000, the camera turns right into a courtyard with yellow flowers and benches, where it continues until the end of the video at 00:34.000. To return to the start, I must reverse these movements: 1."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 2,
          "note": "1. **Analyze the starting position:** The video begins with me facing a building, with a low wall featuring blue tiles in the immediate foreground. The ground is paved with interlocking stones. This is my starting point. 2. **Trace my movement throughout the video:** * First, I pan my head to the right, observing a seating area with a blue sofa and umbrella. * My primary walking path starts around 00:11. I walk forward from my starting position, moving along a walkway. I pass an A-frame sign on my right. This walkway appears to curve or require a left turn to join a more open path."
        },
        {
          "name": "GPT-5.2",
          "choice": 2,
          "note": "At the end I’m facing into the courtyard; to return I should turn around and walk straight back toward the building area. From there, the route back matches the earlier path in reverse: make a left turn, go straight, then make a right turn and continue straight to reach the starting spot."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 2,
          "note": "The video starts at the fountain area (frame 0) and ends in the courtyard (frame 34). To retrace the path from the end to the start: 1. Turn around (facing the reverse direction of the end frame), go straight (reversing the last segment to reach the intersection where the right turn was made to enter the courtyard). 2. Turn left to reverse the right turn that led to the courtyard, then go straight (retracing toward the fountain area). 3. Turn right to reverse the earlier left turn, then continue straight to return to the starting fountain area."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 1,
          "note": "To determine the path back to the starting point, analyze the movement from the end of the video (frame 34.7) to the start (frame 0.3). The end view shows the courtyard with palms, benches, and the building. Reversing the path: from the end, turn around (face the direction of the start), go straight. The starting point is near the blue-tiled wall and initial tables. The path back requires two left turns (as the layout of the courtyard and buildings implies that turning left, then left again leads back to the start). Option B matches this sequence: 'Turn around, go straight."
        }
      ]
    }
  ],
  "mem": [
    {
      "video": "./static/videos/13_49.mp4",
      "question": "Which object changes between earlier and later in the video?",
      "options": [
        "Round table",
        "Television",
        "Ping-pong table",
        "Handwritten thank-you banner"
      ],
      "answer": 3,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 3,
          "note": "The handwritten thank-you banner is initially seen on a small square table in the middle of a seating area (frames 00:01.500 to 00:09.000). Later in the video, it is seen placed on the ping-pong table (frames 00:17.500 to 00:21.000). The other objects mentioned (round table, television, ping-pong table) remain in their respective positions throughout the video."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 3,
          "note": "The user wants me to identify an object that changes its position or state during the video. 1. **Analyze the video frames chronologically to track the objects mentioned in the options.** 2. **Option A: Round table.** At the beginning of the video (e.g., 00:00, 00:01), a round table with chairs is visible in the background. Later in the video (e.g., 00:10-00:12), I look at this table again. It appears to be in the same location. It does not change. 3. **Option B: Television.** A television is visible mounted on the wall in the background (e.g., 00:08, 00:19)."
        },
        {
          "name": "GPT-5.2",
          "choice": 3,
          "note": ""
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 3,
          "note": "The handwritten thank-you banner is initially seen on a small table in earlier frames (e.g., frame 3) and later appears on the ping-pong table in frame 21. Other objects like the round table, television, and ping-pong table remain in consistent positions without notable changes. Thus, the banner is the object that changes location between earlier and later frames."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 3,
          "note": "Let's analyze the frames to see which object changes between earlier and later in the video.  First, let's look at the D option: \"Handwritten thank-you banner\". In the early frames (1-4, 8-10), there's a table with what appears to be a \"Thank you\" banner. The banner is clearly visible in frames 3, 4, 8, 9, and 10.   However, in the later frames (15-22), the \"Thank you\" banner is not visible. For example, in frame 15, the ping-pong table is visible but the handwritten banner doesn't appear to be on it."
        }
      ]
    },
    {
      "video": "./static/videos/10_52.mp4",
      "question": "Is the outdoor post light I approach at the end of the video the same one seen at the beginning?",
      "options": [
        "Yes",
        "No"
      ],
      "answer": 0,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 0,
          "note": "At the beginning of the video (around 00:00.000 to 00:07.000), the camera approaches a silver/white outdoor post light located on the edge of a grassy field, near a path leading to the 'Physical Sciences North' building. After reaching this post light, the camera pans left, showing the large grassy field and the sun (00:09.000 to 00:21.000). Then, the camera pans back to the right, returning its focus to the 'Physical Sciences North' building. By the end of the video (00:23.500 to 00:31.000), the camera approaches a post light again."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 1,
          "note": "In the initial frames of the video (00:00-00:04), I am standing on a large lawn next to a paved path. A simple, white outdoor post light is visible further down the path, to the left. As the video progresses, I pan across the lawn and then back towards the building. At the end of the video (00:23-00:31), I approach the entrance of the building. There is an outdoor post light to the left of the entrance. However, this post light is grey or metallic in color and has a different design from the white one seen at the beginning."
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": "The same post light is visible near the path by the Physical Sciences North building at the start, and the camera later returns and moves closer to that same light near the entrance at the end."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 0,
          "note": "In the initial frames (e.g., frame 1), a post light is visible on the pathway near the building. In the final frames (e.g., frame 32), the camera approaches a post light in front of the same building. The consistent presence of the building and the post light’s position relative to it indicate it is the same post light, as the camera movement brings the viewer closer to the initially seen object."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 1,
          "note": "In the initial frames (e.g., frame 0-5), a post light is visible near the path on the left side of the frame. By the end of the video (frames 24-32), the post light near the 'Physical Science North' building is in a different location (closer to the building and not the same as the initial one). Thus, they are not the same post light."
        }
      ]
    },
    {
      "video": "./static/videos/13_52.mp4",
      "question": "Which object changes between earlier and later in the video?",
      "options": [
        "Water bottle",
        "Chair",
        "Laptop",
        "Backpack"
      ],
      "answer": 2,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 2,
          "note": "To determine which object changes between the earlier and later parts of the video, I will examine the objects on the table in the common area. In the earlier part of the video (around 00:05.000 to 00:08.000), a laptop is clearly visible, open on the table next to a white bottle and a cup. As the camera pans around the room and returns to the table in the later part of the video (around 00:15.000 to 00:16.500), the laptop is no longer on the table. Instead, there are some papers and other small items in its place."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 3,
          "note": "The user wants me to identify an object that changes between the earlier and later parts of the video. 1. **Analyze the video's structure:** The video consists of a slow, continuous pan around a large common room. The camera makes more than a full 360-degree turn, showing some areas twice. This allows for a comparison of the same area at two different points in time. 2. **Identify the objects from the options:** I need to locate a water bottle, a chair, a laptop, and a backpack. All these items are visible on or around a long table that comes into view at approximately 00:05. 3."
        },
        {
          "name": "GPT-5.2",
          "choice": 2,
          "note": "Mid-video, an open laptop is clearly visible on the table; in later frames when the same table area comes back into view, the laptop is no longer present/visible, indicating the laptop changes between earlier and later."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 2,
          "note": "The laptop is visible on the table in frames 6.4-8.5, but not prominently in the earlier frames (0.3-5.4) or later frames (9.5-18.7). This indicates it appears in the middle portion of the video but not consistently throughout, making it the object that changes between earlier and later parts of the video. The other options (water bottle, chair, backpack) are either not clearly visible or remain constant throughout the frames."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 2,
          "note": "Analyzing the frames, the laptop is visible on the table in some frames (e.g., frame 7) and may change state (e.g., open to closed) or presence in later frames. Other options like water bottle, chair, and backpack do not show evident state changes between earlier and later frames based on the provided sequence. The laptop's presence or state is the most likely to change, making C the correct choice."
        }
      ]
    },
    {
      "video": "./static/videos/101_5.mp4",
      "question": "Which object changes between earlier and later in the video?",
      "options": [
        "Chair",
        "Basket",
        "Conference table",
        "Remote control"
      ],
      "answer": 1,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 1,
          "note": "To determine which object changes between the earlier and later parts of the video, I will examine the position and state of the objects mentioned in the options: Chair, Basket, Conference table, and Remote control. 1. **Conference table:** The large white conference table remains in the center of the room throughout the video. Its state and position do not change. 2. **Chair:** There are several chairs (yellow, red, and grey/blue) in the room."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 3,
          "note": "The user wants me to identify an object that changes its state or position during the video. 1. I will examine the video frames, paying close attention to the objects listed in the options: Chair, Basket, Conference table, and Remote control. 2. At the beginning of the video, specifically around the 00:01 mark (frame 3), I can clearly see a small, black, rectangular object that looks like a remote control sitting on the white conference table. 3."
        },
        {
          "name": "GPT-5.2",
          "choice": 1,
          "note": "The black basket/tray appears on the main conference table in earlier frames, but later it is on the small round table by the window, indicating it changed position."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 3,
          "note": "In the earlier frames (e.g., frame 2), a remote control is visible on the conference table. In later frames (e.g., frame 12), the remote control is no longer present on the table. This indicates a change in the presence of the remote control, while other objects like chairs, baskets, and the conference table remain consistent in their presence or appearance throughout the video."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 1,
          "note": "In the video, a black basket is visible on the table in an earlier frame (frame 3). In a later frame (frame 12), the basket is not visible, indicating a change in its presence. Other objects like chairs, the conference table, and the remote control do not show a clear change in presence or state between the frames."
        }
      ]
    },
    {
      "video": "./static/videos/12_50.mp4",
      "question": "Which object changes between earlier and later in the video?",
      "options": [
        "Vase",
        "Salt mill",
        "Decorative pumpkin",
        "White chair"
      ],
      "answer": 0,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 0,
          "note": "By comparing the earlier and later parts of the video, we can see that the vase changes its position. In the earlier frames (e.g., 00:03.000), a white vase with flowers is located on the dining table. In the later frames (e.g., 00:24.000), the same or a very similar vase is now located on the kitchen counter with the brick base, and it is missing from the dining table tray (e.g., 00:25.000). The other objects mentioned (salt mill, decorative pumpkin, white chair) do not change their status or position in a way that indicates a change between earlier and later parts of the video."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 0,
          "note": "The user wants me to identify an object that changes its state or position during the video. 1. **Initial Observation (00:00 - 00:07):** I start by looking at a kitchen area from a dining room. I pan around the room. On the tiled bar counter separating the kitchen and dining area, there is a black and white object that looks like a purse or a small bag. I then pan across the dining table and into the kitchen, and the purse is still visible on the bar counter. 2."
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": "Early frames show a vase with flowers on the dining table centerpiece; in later frames the table centerpiece tray is visible without the vase, indicating the vase is the object that changes."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 2,
          "note": "The decorative pumpkin is visible in later frames (e.g., frame 30) but not in earlier frames, indicating a change in its presence. Other options like vase, salt mill, and white chair remain consistent throughout the video."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 2,
          "note": "The decorative pumpkin appears on the shelf in frame 29, which is not visible in earlier frames. The other options (vase, salt mill, white chair) remain consistent throughout the video without notable changes."
        }
      ]
    },
    {
      "video": "./static/videos/101_20.mp4",
      "question": "Which object changes between earlier and later in the video?",
      "options": [
        "Pepper mill",
        "Spray bottle",
        "Refrigerator",
        "Paper towel"
      ],
      "answer": 0,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 3,
          "note": "Comparing the earlier frames (e.g., 00:03.500 to 00:04.500) with the later frames (e.g., 00:14.000 to 00:15.000), the paper towel roll on the shelf undergoes a noticeable change. In the earlier part of the video, the roll is relatively thick and full. In the later part of the video, after the camera pans back from the window, the paper towel roll is significantly thinner, indicating that some of it has been used or removed."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 3,
          "note": "The user wants me to identify an object that changes between the beginning and the end of the video. 1. I first scan the kitchen area to identify the objects listed in the options. I see a refrigerator on the left, a yellow spray bottle in an open cabinet, and a roll of paper towels next to it. I don't see a clear pepper mill, but there are some shakers and jars. 2. I compare the state of these objects at the beginning of the video (around 00:02-00:03) with their state at the end of the video (around 00:14-00:15). 3. The refrigerator remains in the same position with its door closed. 4."
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": "A spice/pepper-grinder-like container with a black top appears on the countertop in later frames, while it is not visible in the earlier wide kitchen view; the spray bottle, refrigerator, and paper towel roll remain in place."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 0,
          "note": "Analyzing the frames: In frame 3, a pepper mill (spice container with label) is visible on the shelf above the sink. In frame 15, the same shelf shows paper towel and spray bottle but the pepper mill is no longer present. This indicates the pepper mill changes (disappears) between earlier and later frames. Other options: Spray bottle (B) remains visible; Refrigerator (C) is not shown changing; Paper towel (D) is consistently present. Thus, the correct answer is A."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 3,
          "note": "Let me analyze the video frames to identify which object changes between earlier and later in the video.  I'll examine each option:  A: Pepper mill - I can see a pepper mill-like container in frame 16 and it appears to remain in the same position in subsequent frames. B: Spray bottle - The yellow spray bottle is present in multiple frames (2-6, 13-16) and doesn't appear to change. C: Refrigerator - I don't see a refrigerator in any of the frames, so this can't be the answer. D: Paper towel - In frame 3, I clearly see a white paper towel roll on the counter next to the yellow spray bottle."
        }
      ]
    }
  ],
  "aff": [
    {
      "video": "./static/videos/100_43.mp4",
      "question": "Based on the video, can I reach up and touch the top edge of the television using only my arm, without jumping, climbing, or using anything?",
      "options": [
        "No",
        "Yes"
      ],
      "answer": 1,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 1,
          "note": "In the video, specifically around the 00:05.000 mark, the person's hand is seen reaching up and touching the top edge of the television screen. This action is performed without any visible jumping, climbing, or use of external aids, demonstrating that the top edge is within their reach using only their arm."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 1,
          "note": "The video starts with a view of a large, vertically mounted television screen. I then walk closer to it. Towards the end of the video, my hand enters the frame and I reach up towards the top of the television. My hand gets very close to the top edge of the screen, indicating that I can indeed reach it with just my arm, without needing to jump or use any external aids."
        },
        {
          "name": "GPT-5.2",
          "choice": 1,
          "note": "In the later frames, my outstretched hand reaches the height of the display’s top edge and appears to make contact (or is immediately adjacent) without any jumping or climbing."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 1,
          "note": "In frames 5-7, a hand is extended towards the top edge of the television. The hand reaches the level of the top edge of the screen, indicating that it is possible to touch the top edge using only the arm without additional actions like jumping or climbing."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 1,
          "note": ""
        }
      ]
    },
    {
      "video": "./static/videos/1_47.mp4",
      "question": "Based on the video, can I reach up and touch the air vent using just my arm, without climbing, jumping or using anything?",
      "options": [
        "No",
        "Yes"
      ],
      "answer": 0,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 0,
          "note": "The air vents in the video are located high up on the wall, above the windows and near the ceiling. Based on the first-person perspective, the camera (representing the person's head) is significantly lower than the vents. When the person extends their arm in the video (e.g., around 00:05.000 to 00:07.000), it is clear that the distance from their standing position to the vents is greater than the length of an average human arm. Therefore, they would not be able to touch the air vent without climbing or jumping."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 0,
          "note": "The user wants to know if I can touch the air vent from my standing position. 1. At timestamp 00:04-00:06, I extend my arm and hand upwards, in the direction of the ceiling and the windows. 2. The air vents are located high on the wall, just below the ceiling and above the windows. 3. When my arm is extended, there is a clear and significant gap between my fingertips and the air vents. 4. I am standing on the floor throughout the video and do not jump or climb on any furniture. 5."
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": "The air vent is positioned high near the ceiling above the windows, and the frames never show your hand reaching close to it from standing height; it appears out of arm’s reach without climbing or jumping."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 0,
          "note": "The air vents are positioned high on the wall above the windows. In the video, the camera shows the vents at a height that would be beyond the reach of a person's arm while standing normally. Since the question specifies not using climbing, jumping, or any tools, the vents are out of reach, so the answer is No."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 0,
          "note": "The air vents are located on the ceiling, which is significantly higher than the person's arm reach as observed in the video frames. The person's arm, when extended (as seen in frames 5-6), does not reach the ceiling level where the air vents are mounted. Therefore, it is not possible to touch the air vent with just the arm without additional actions like climbing or jumping."
        }
      ]
    },
    {
      "video": "./static/videos/100_36.mp4",
      "question": "Based on the video, can I reach forward and touch the coffee cup by sitting up from the couch, without standing up or changing my position?",
      "options": [
        "No",
        "Yes"
      ],
      "answer": 0,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 0,
          "note": "The video shows the person standing and moving around a room with a bulletin board, shelves, and a counter. While a couch and a glass table are visible in the background (around 00:01.000), the person is not sitting on the couch; they are standing. Furthermore, there is no coffee cup visible on the counter, the shelves, or the glass table. Therefore, it is not possible to reach forward and touch a coffee cup from a sitting position on the couch without changing position, as the person is not on the couch and no coffee cup is present."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 0,
          "note": "The user asks if I can reach a coffee cup from my seated position. I carefully review all the frames provided. I am sitting on what appears to be a couch or a chair in a common area or office lounge. I look around at a bulletin board, shelves, and a small table. On the table, there is a box of tissues, but there is no coffee cup visible anywhere in the video. Since there is no coffee cup shown in the video, I cannot reach it. Therefore, the answer is no."
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": ""
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 0,
          "note": "In the provided video frames, there is no coffee cup visible. Therefore, the action of reaching forward to touch a coffee cup cannot be performed as the object does not exist in the observed environment. Hence, the answer is 'No'."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 0,
          "note": "The video frames do not show a coffee cup anywhere in the visible environment. Since there is no coffee cup present in the video, it is impossible to reach it, making the answer 'No'."
        }
      ]
    },
    {
      "video": "./static/videos/100_38.mp4",
      "question": "Based on the video, can I touch the door pull handle using only my arm after taking one small step leftward, without leaning or using anything?",
      "options": [
        "Yes",
        "No"
      ],
      "answer": 1,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 0,
          "note": "In the video, the person approaches the 'Courtyard Cafe' doors. By the end of the clip (around 00:05.000 to 00:07.000), the person is standing very close to the doors, and their right hand is extended, nearly touching the right door pull handle. The distance between the person and the doors is less than an arm's length. If the person takes one small step to the left, they would be positioned directly in front of the left door's pull handle."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 1,
          "note": "The user wants to know if I can touch the door handle after taking a small step to the left. 1. **Initial State:** I am standing in front of the double doors of the 'Courtyard Café'. 2. **Action in Video:** I walk forward, approaching the doors. My right hand extends towards the handle on the right-hand door. 3. **Final State:** By the end of the video, my right hand is very close to the right door handle, positioned to pull it open. My body is slightly to the right of the center crack between the two doors. 4."
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": "In the later frames I’m standing very close to the double doors and my right hand is already reaching to near the pull handle without leaning. A small step left wouldn’t put the handle out of arm’s reach, so I could still touch it using only my arm."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 0,
          "note": "The video shows the person approaching the door and reaching the handle with their arm (frame 7). Taking a small step leftward would position the person closer to the handle's location, and since the arm is already able to reach the handle in the video without leaning, it is reasonable to infer that a small step left would allow contact with the handle using only the arm."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 0,
          "note": "In the video, the person's hand successfully reaches the door pull handle. The question asks if after a small left step, the arm can touch the handle without leaning. Since the hand is shown making contact with the handle in the frames (indicating sufficient reach), the answer is 'Yes'."
        }
      ]
    },
    {
      "video": "./static/videos/14_55.mp4",
      "question": "Based on the video, can I touch the nearest metal patio chair to my right using only arm movement, without any body or position change?",
      "options": [
        "No",
        "Yes"
      ],
      "answer": 1,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 0,
          "note": "The video shows the person standing on a paved area. At 00:02.500, the person extends their right arm while standing near a metal grate on the ground. At 00:04.500, the camera pans to the right, revealing a set of patio furniture (a table and two chairs). The nearest chair is several feet away from the person's position near the grate. Given the distance visible in the frames, the person cannot reach the chair with just an arm movement; they would need to walk towards it. Therefore, the answer is No."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 0,
          "note": "The video begins with me looking forward and then down at my legs, indicating I am likely in a seated position. I then look to my right and extend my left arm forward. My hand is visible in the frame, reaching out, but it falls significantly short of the nearest metal patio chair, which is several feet away. The visual gap between my outstretched hand and the chair is substantial. Therefore, based on the visual evidence, I cannot touch the chair with only arm movement and without changing my body's position."
        },
        {
          "name": "GPT-5.2",
          "choice": 0,
          "note": "From the seated viewpoint (knees visible), the nearest metal patio chair to the right appears several feet away; even with the arm fully extended, it does not look within reach without moving body/position."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 0,
          "note": "The video shows the person's perspective with chairs located at a distance in the courtyard. The nearest metal patio chair is not within arm's reach from the current position without moving the body, as it is situated several meters away. Therefore, touching it with only arm movement is not possible."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 0,
          "note": "In the frames, the person is seated (knees visible in frame 2), and the nearest metal patio chair to the right (as seen in frames 6-8) is not within immediate arm's reach without moving the body or position. The hand movements shown (frame 3-5) are directed toward the ground, not the chair, and the chair’s distance from the seated position implies it cannot be touched with only arm movement."
        }
      ]
    },
    {
      "video": "./static/videos/100_32.mp4",
      "question": "Based on the video, can I lean forward and touch the water bottle using only my arm, without moving my feet?",
      "options": [
        "No",
        "Yes"
      ],
      "answer": 1,
      "models": [
        {
          "name": "Gemini 3 Flash",
          "choice": 1,
          "note": "In the video, the person approaches a grey cabinet with a water bottle on top. At around 00:04.500 to 00:05.500, the person extends their arm towards the cabinet. The hand is clearly close enough to the water bottle that a simple lean forward would allow them to touch it without moving their feet. The distance is well within an arm's reach."
        },
        {
          "name": "Gemini 2.5 Pro",
          "choice": 1,
          "note": "The video starts with me standing in a hallway, looking down the corridor. A grey cabinet with a water bottle on top is on my right. At timestamp 00:04, my right hand and arm extend into the frame, moving towards the cabinet. My hand hovers directly over the cabinet's surface, very close to the water bottle. My body's position relative to the hallway does not appear to change, suggesting I have not moved my feet. Since my hand is able to reach the space immediately next to and above the water bottle, it is clear that I can touch it by simply extending my arm."
        },
        {
          "name": "GPT-5.2",
          "choice": 1,
          "note": "In the later frames, the water bottle is very close on top of the cabinet and my outstretched hand reaches over the cabinet surface near it, indicating it’s within arm’s reach without stepping."
        },
        {
          "name": "Qwen3-VL 235B",
          "choice": 1,
          "note": "In frames 5-7, the person's hand extends toward the cabinet where the water bottle is placed. The hand reaches close to the bottle, indicating that leaning forward to touch it with the arm (without moving feet) is possible. Thus, the answer is B."
        },
        {
          "name": "Qwen3-VL 32B",
          "choice": 1,
          "note": "In frame 5 and 6, a hand is extended towards the water bottle on the cabinet, indicating that the arm can reach the bottle without moving the feet. Thus, it is possible."
        }
      ]
    }
  ]
};
