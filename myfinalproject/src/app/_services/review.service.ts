﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Review } from '@/_models';

@Injectable({ providedIn: 'root' })
export class ReviewService {
    constructor(private http: HttpClient) { }

    // create(review: Review) {
    create(id: string) {
        return this.http.post(`${config.apiUrl}/reviews/create`, id);
    }

    getAll() {
        return this.http.get<Review[]>(`${config.apiUrl}/reviews`);
    }

    getAllReviewsForSong(id: string) {
        return this.http.get<Review[]>(`${config.apiUrl}/reviews/${id}`);
    }
}