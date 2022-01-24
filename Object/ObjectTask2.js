function objectDemo(worker) {

    if (worker.dizziness){
        worker.levelOfHydrated += worker.weight*0.1*worker.experience;
        worker.dizziness = false;
    }

    return worker;


}
