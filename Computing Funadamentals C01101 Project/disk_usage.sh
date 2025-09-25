echo "Disk Usage Checker Script Started"

# Current disk usage percentage
disk_usage=85

# Threshold value
threshold=80

# Check if disk usage exceeds the threshold
if [ $disk_usage -gt $threshold ]; then
    echo "Warning: Disk usage is at $disk_usage%, which exceeds the threshold!"
else
    echo "Disk usage is at $disk_usage%, within the safe limit."
fi

echo "Disk Usage Checker Script Completed"
