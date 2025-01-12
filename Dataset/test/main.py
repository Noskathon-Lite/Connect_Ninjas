import cv2
import subprocess
import os

current_machine_id = subprocess.check_output('wmic csproduct get uuid').split(b'\n')[1].strip()

# Create folders for storing images
os.makedirs("Dataset/test/eyes-open", exist_ok=True)
os.makedirs("Dataset/test/eyes-close", exist_ok=True)

# Initialize webcam
cap = cv2.VideoCapture(0)

# Start with "eyes-open" label
label = "eyes-open"
img_count = {"eyes-open": 0, "eyes-close": 0}

with open('Dataset/test/index.txt', 'r') as file:
    # Read the index count of the image
    content = file.read().split(',')
    img_count["eyes-open"] = int(content[0])
    img_count["eyes-close"] = int(content[1])
    if not file.closed:
        file.close
    file.close()
    
def toggle_label(current_label):
    """Toggle between eyes-open and eyes-close."""
    return "eyes-close" if current_label == "eyes-open" else "eyes-open"

while True:
    # Capture frame from webcam
    ret, frame = cap.read()
    if not ret:
        print("Failed to capture image. Exiting...")
        break
    
    # Wait for key press
    key = cv2.waitKey(1)

    if key == ord(' '):  # Space key toggles the label
        label = toggle_label(label)
    elif key == ord('s'):  # 's' key saves the current frame to the appropriate folder
        img_path = os.path.join("Dataset", "test", label, f"{label}_{current_machine_id}_{img_count[label]}.jpg")
        cv2.imwrite(img_path, frame)
        img_count[label] += 1
        print(f"Saved: {img_path}")
    elif key == ord('q'):  # 'q' key exits the program
        with open('Dataset/test/index.txt', 'w') as file:
            # Write count to the file
            file.write(str(img_count["eyes-open"])+","+str(img_count["eyes-close"]))
            file.close()
        break
    
    # Display the current label on the frame
    cv2.putText(frame, f"Label: {label}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    # Show the webcam feed
    cv2.imshow("Webcam", frame)

# Release resources
cap.release()
cv2.destroyAllWindows()