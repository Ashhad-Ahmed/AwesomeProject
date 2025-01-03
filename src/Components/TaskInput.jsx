import DateTimePicker from '@react-native-community/datetimepicker';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
        deadline: deadline.toISOString(),
      };
      dispatch(addTask(newTask));
      setTask('');
      scheduleDeadlineNotification(
        'Task Deadline Alert',
        `Your task "${task}" is due today!`,
        deadline
      );
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Set Deadline" onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker
          value={deadline}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowPicker(false);
            if (selectedDate) setDeadline(selectedDate);
          }}
        />
      )}
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
};

