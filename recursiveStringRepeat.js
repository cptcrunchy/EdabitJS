const repetition = (str, n) => (n <= 0) ? `` : str + repetition(str, n-1)

repetition("ab", 3)//?
repetition("kiwi", 3)//?
repetition("soccer", 2)//?