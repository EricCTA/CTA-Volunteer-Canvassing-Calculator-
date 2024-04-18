def get_user_input():
    voter_universe = int(input("Enter the size of the voter universe: "))
    volunteer_days = int(input("Enter the number of volunteer days: "))
    shift_length_hours = float(input("Enter the length of shifts in hours: "))
    
    return voter_universe, volunteer_days, shift_length_hours

def main():
    voter_universe, volunteer_days, shift_length_hours = get_user_input()
    print("Voter universe:", voter_universe)
    print("Volunteer days:", volunteer_days)
    print("Shift length (hours):", shift_length_hours)

if __name__ == "__main__":
    main()
