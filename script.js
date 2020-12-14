void simulation(vector<struct Person> a, int day, long long int num) {
    /* 
    status:
    0 = not infected but susceptible
    1 = infected
    2 = dead
    3 = recovered and immune 
    */
    double infected = 1;
    double dead = 0;
    double recovered = 0;
    char action;
    a[0].status = 1;
    cout << "Day " << day << endl;
    cout << "STATS:" << endl;
    cout << "Number of infected people: " << infected << endl;
    cout << "Number of dead people: " << dead << endl;
    cout << "Number of recovered/immune people: " << recovered << endl;
    cout << "Actions [You can only press 'n' or 'z' on the first turn]:";
    cin >> action;
    cout << endl;
    bool quarantine;
    bool social_distancing;
    bool contact_tracing;
    while (infected != 0 || action != 'z') {
        int passed_on_to = rand() % 5;
        int pot;
        if (passed_on_to == 0 || passed_on_to == 1) { 
            if (quarantine == false && social_distancing == false) {
                pot = 2*infected;
            }
            else if (quarantine == true && social_distancing == false){
                pot = 1*infected;
            }
            else if (social_distancing == true) {
                pot = 0;
            }
            else if (contact_tracing == true) {
              pot = 0*infected;
            }
        }
        if (passed_on_to == 2 || passed_on_to == 3) { 
            if (quarantine == false && social_distancing == false) {
                pot = 3*infected;
            }
            else if (quarantine == true && social_distancing == false){
                pot = 2*infected;
            }
            else if (social_distancing == true) {
                pot = 1*infected;
            }
            else if (contact_tracing == true) {
              pot = infected;
            }
        }
        else { 
            if (quarantine == false && social_distancing == false) {
                pot = 4*infected;
            }
            else if (quarantine == true && social_distancing == false){
                pot = 3*infected;
            }
            else if (social_distancing == true) {
                pot = 2*infected;
            }
            else if (contact_tracing == true) {
              pot = infected;
            }
        }
        for (int i = 0; i < pot; i++) {
            int var = rand() % num;
            if (a[var].status == 0) {
                a[var].status = 1;
                infected += 1;
            }
            else { /* Do nothing */ }
        }
        for (int i = 0; i < num; i++) {
            if (a[i].status == 1) {a[i].days_since_infected = day;}
            else {a[i].days_since_infected = 0;}
            int day_rec = rand() % 7;
            if (a[i].days_since_infected >= day_rec+6) {
                int doa = rand() % 200;
                int sog = rand() % 2;
                int hosp_carr_cap = 0.1*num;
                int death_rate;
                int t;
                if (a[i].age < 60) { t = 1; }
                else {t = 2; }
                if (infected > hosp_carr_cap && a[i].age < 60) {
                    death_rate = (7*t) + ((infected-hosp_carr_cap)/hosp_carr_cap);
                }
                else {
                    death_rate = 7*t;
                }
                if (sog == 0) {
                    // Nothing
                }
                else {
                    if (doa <= death_rate) {
                        a[i].status = 2;
                        dead += 1;
                        infected -= 1;
                    }
                    else {
                        a[i].status = 3;
                        recovered += 1;
                        infected -= 1;
                    }
                }
            }
        }

        day += 1;

        if (infected == 0) {
            cout << "Day " << day << endl;
            cout << "STATS:" << endl;
            cout << "Number of infected people: " << infected << endl;
            cout << "Number of dead people: " << dead << endl;
            cout << "Number of recovered people: " << recovered << endl;
            cout << endl;
            break;
        }

        else {
            cout << "Day " << day << endl;
            cout << "STATS:" << endl;
            cout << "Number of infected people: " << infected << endl;
            cout << "Number of dead people: " << dead << endl;
            cout << "Number of recovered people: " << recovered << endl;
            cout << "Actions: ";
            cin >> action;
            cout << endl;
        }

        if (action == 'q') {
            quarantine = true;
        }
        else if (action == 's') {
            social_distancing = true;
        }
        else if (infected >= 0.30*num) {
             social_distancing = true;
        }
        else if (action == 'c') {
          contact_tracing = true;
        }
        else {/*Do nothing*/}

    }
    getJSON
    ('https://apify.com/covid-19', function(err, data) {
    
    if (dead > 0.034*num) {
        cout << "You have failed!" << endl;
    }
    else {
        cout << "You have worked hard, and that hard work has paid off." << endl;
    }
    cout << endl;
    cout << "ENDGAME STATS: " << endl;
    cout << "Death Count: " << dead << endl;
    cout << "Mortality Rate: " << (dead/num)*100 << "%" << endl;
    cout << "Recovery Rate: " << (recovered/num)*100 << "%" << endl;
    cout << endl;

    fstream file;
    file.open("feedback.txt",ios::app);
    cout << "Any feedback? (Must be 1000 words or less)" << endl;
    char feedback[1000];
    cin >> feedback;
    file << feedback << "\n";
    file.close();
    
}