def sort_list(list_arg):
    new_list = []

    for item in range(len(list_arg)):

        temp_lowest_item = list_arg[0]

        for i in list_arg:
            if i > temp_lowest_item:
                temp_lowest_item = i
        new_list.append(temp_lowest_item)
        list_arg.remove(temp_lowest_item)

    # Output
    print(new_list)


# Test
sort_list([1, 5, 8, 2, 2, 12, 87, 2, 1, 3])
