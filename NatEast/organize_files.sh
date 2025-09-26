echo "File Organiser Script Started"

# Sample filenames array
files=("file.txt" "image.jpg" "document.pdf" "notes.txt" "photo.jpg")

# Loop through each file
for file in "${files[@]}"; do
    # Get the file extension
    extension="${file##*.}"
    
    # Check file extension and print appropriate message
    if [ "$extension" == "txt" ]; then
        echo "Moving $file to Text_Files folder."
    elif [ "$extension" == "jpg" ]; then
        echo "Moving $file to Images folder."
    else
        echo "File type of $file is not recognized for organization."
    fi
done

echo "File Organiser Script Completed"

